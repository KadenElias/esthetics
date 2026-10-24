import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  setDoc,
  getDoc,
  doc, 
  query, 
  where, 
  onSnapshot,
  Timestamp,
  orderBy
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType, Service, Appointment, Testimonial, GalleryItem, UserProfile, Role } from '../lib/firebase';

import { CLARE_SERVICES } from '../data/servicesData';

const SERVICES_PATH = 'services';
const APPOINTMENTS_PATH = 'appointments';
const TESTIMONIALS_PATH = 'testimonials';
const GALLERY_PATH = 'gallery';
const USERS_PATH = 'users';

export const getServices = async (): Promise<Service[]> => {
  try {
    const snap = await getDocs(collection(db, SERVICES_PATH));
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() } as Service));
    if (list.length > 0) {
      const hasUpdatedServices = list.some(s => 
        s.name.toLowerCase().includes('signature facial') || 
        s.name.toLowerCase().includes('procell') ||
        s.name.toLowerCase().includes('brow full package')
      );
      if (hasUpdatedServices) return list;
    }
    return CLARE_SERVICES;
  } catch (e) {
    handleFirestoreError(e, OperationType.LIST, SERVICES_PATH);
    return CLARE_SERVICES;
  }
};

export const getGallery = async (): Promise<GalleryItem[]> => {
  try {
    const snap = await getDocs(collection(db, GALLERY_PATH));
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as GalleryItem));
  } catch (e) {
    handleFirestoreError(e, OperationType.LIST, GALLERY_PATH);
    return [];
  }
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const q = query(collection(db, TESTIMONIALS_PATH), orderBy('date', 'desc'));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Testimonial));
  } catch (e) {
    handleFirestoreError(e, OperationType.LIST, TESTIMONIALS_PATH);
    return [];
  }
};

export const bookAppointment = async (appointment: Omit<Appointment, 'id' | 'status'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, APPOINTMENTS_PATH), {
      ...appointment,
      status: 'pending',
    });
    return docRef.id;
  } catch (e) {
    handleFirestoreError(e, OperationType.CREATE, APPOINTMENTS_PATH);
    return '';
  }
};

export const getUserAppointments = (userId: string, callback: (apps: Appointment[]) => void) => {
  const q = query(collection(db, APPOINTMENTS_PATH), where('userId', '==', userId), orderBy('date', 'desc'));
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() } as Appointment)));
  }, (e) => {
    handleFirestoreError(e, OperationType.LIST, APPOINTMENTS_PATH);
  });
};

export const createOrUpdateUser = async (user: UserProfile) => {
  try {
    const userRef = doc(db, USERS_PATH, user.uid);
    await setDoc(userRef, { ...user }, { merge: true });
  } catch (e) {
    handleFirestoreError(e, OperationType.WRITE, `${USERS_PATH}/${user.uid}`);
  }
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userRef = doc(db, USERS_PATH, uid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      return snap.data() as UserProfile;
    }
    return null;
  } catch (e) {
    handleFirestoreError(e, OperationType.GET, `${USERS_PATH}/${uid}`);
    return null;
  }
};
