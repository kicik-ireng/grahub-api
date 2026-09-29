"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyScopeFilter = applyScopeFilter;
function applyScopeFilter(user, targetEntity = '') {
    if (!user || !user.scope)
        return {};
    const scope = user.scope;
    const resident = user.resident;
    if (scope === 'GLOBAL' || scope === 'KELURAHAN') {
        return {};
    }
    if (scope === 'RW') {
        if (!resident || !resident.rwId)
            throw new Error('RW Scope requires RW ID');
        return { rwId: resident.rwId };
    }
    if (scope === 'RT') {
        if (!resident || !resident.rtId)
            throw new Error('RT Scope requires RT ID');
        return { rtId: resident.rtId };
    }
    if (scope === 'FAMILY') {
        if (!resident || !resident.familyId)
            throw new Error('Family Scope requires Family ID');
        if (targetEntity === 'Resident') {
            return { familyId: resident.familyId };
        }
        return { residentId: resident.id };
    }
    if (scope === 'SELF' || scope === 'WARGA') {
        if (!resident || !resident.id)
            throw new Error('Warga Scope requires Resident ID');
        return { residentId: resident.id };
    }
    return {};
}
//# sourceMappingURL=scope.util.js.map