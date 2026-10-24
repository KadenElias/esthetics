# Security Specification - Lumière Esthetics

## Data Invariants
- An appointment must have a valid `userId` (the client) and `serviceId`.
- A client can only view and manage their own appointments.
- Only an administrator can modify `services`, `gallery`, and change user roles.
- Role-based access control (RBAC) is enforced via a `/users/{uid}` document where `role` is either 'client' or 'admin'.

## The "Dirty Dozen" Payloads (Denial Tests)

1. **Identity Spoofing**: Client attempts to create an appointment for another user ID.
2. **Privilege Escalation**: Client attempts to set their own role to 'admin' in `/users/{uid}`.
3. **Orphaned Write**: Client attempts to book a service ID that doesn't exist.
4. **Invalid State**: Client attempts to set an appointment status to 'confirmed' (only admin should confirm).
5. **PII Leak**: Non-admin attempts to list all users in the `/users` collection.
6. **Shadow Field**: Client attempts to add an `isVerified: true` field to their profile.
7. **Resource Poisoning**: Attacker attempts to create a service with a 1MB description string.
8. **ID Poisoning**: Attacker attempts to create a document with an extremely long, invalid ID string.
9. **Role Bypass**: Client attempts to delete a service they didn't create (services are admin-only anyway).
10. **Testimonial Spam**: Unauthenticated user attempts to post a testimonial.
11. **Appointment Stealing**: Client A attempts to read/update Client B's appointment.
12. **Future Poisoning**: Client attempts to set an `appointmentDate` in the past (though server-side checking is harder without `request.time` comparison, we can at least check it exists).

## The Test Runner (firestore.rules.test.ts)
*(I will implement the rules first, then verify)*
