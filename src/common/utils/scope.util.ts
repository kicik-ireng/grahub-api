import { Prisma } from '@prisma/client';

export function applyScopeFilter(user: any, targetEntity: string = ''): any {
  if (!user || !user.scope) return {};

  const scope = user.scope;
  const resident = user.resident;

  // GLOBAL / KELURAHAN sees everything
  if (scope === 'GLOBAL' || scope === 'KELURAHAN') {
    return {};
  }

  // RW sees their own RW
  if (scope === 'RW') {
    if (!resident || !resident.rwId) throw new Error('RW Scope requires RW ID');
    return { rwId: resident.rwId };
  }

  // RT sees their own RT
  if (scope === 'RT') {
    if (!resident || !resident.rtId) throw new Error('RT Scope requires RT ID');
    return { rtId: resident.rtId };
  }

  // FAMILY sees their own family
  if (scope === 'FAMILY') {
    if (!resident || !resident.familyId)
      throw new Error('Family Scope requires Family ID');

    // For Resident entities, filter by familyId
    if (targetEntity === 'Resident') {
      return { familyId: resident.familyId };
    }
    // For other entities, maybe they don't have familyId, but residentId
    return { residentId: resident.id };
  }

  // SELF / WARGA sees only themselves
  if (scope === 'SELF' || scope === 'WARGA') {
    if (!resident || !resident.id)
      throw new Error('Warga Scope requires Resident ID');
    return { residentId: resident.id }; // Assuming the entity belongs to a resident
  }

  return {};
}
