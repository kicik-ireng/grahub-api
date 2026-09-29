"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('Starting seed...');
    const permissions = [
        { code: 'users.create', name: 'Create Users', group: 'users' },
        { code: 'users.read', name: 'Read Users', group: 'users' },
        { code: 'users.update', name: 'Update Users', group: 'users' },
        { code: 'users.delete', name: 'Delete Users', group: 'users' },
        { code: 'roles.manage', name: 'Manage Roles', group: 'roles' },
        { code: 'permissions.manage', name: 'Manage Permissions', group: 'permissions' },
        { code: 'residents.create', name: 'Create Resident', group: 'residents' },
        { code: 'residents.read', name: 'Read Resident', group: 'residents' },
        { code: 'residents.update', name: 'Update Resident', group: 'residents' },
        { code: 'residents.verify', name: 'Verify Resident', group: 'residents' },
        { code: 'residents.export', name: 'Export Residents', group: 'residents' },
        { code: 'letters.create', name: 'Create Letter', group: 'letters' },
        { code: 'letters.read', name: 'Read Letter', group: 'letters' },
        { code: 'letters.verify', name: 'Verify Letter', group: 'letters' },
        { code: 'letters.approve', name: 'Approve Letter', group: 'letters' },
    ];
    for (const p of permissions) {
        await prisma.permission.upsert({
            where: { code: p.code },
            update: {},
            create: p,
        });
    }
    const roles = [
        { code: 'SUPER_ADMIN', name: 'Super Admin', description: 'System Administrator with global access' },
        { code: 'KELURAHAN', name: 'Kelurahan', description: 'Kelurahan Officer' },
        { code: 'RW', name: 'RW', description: 'Ketua RW' },
        { code: 'RT', name: 'RT', description: 'Ketua RT' },
        { code: 'WARGA', name: 'Warga', description: 'Resident' },
    ];
    for (const r of roles) {
        await prisma.role.upsert({
            where: { code: r.code },
            update: {},
            create: r,
        });
    }
    const superAdminRole = await prisma.role.findUnique({ where: { code: 'SUPER_ADMIN' } });
    const allPermissions = await prisma.permission.findMany();
    if (superAdminRole) {
        for (const p of allPermissions) {
            await prisma.rolePermission.upsert({
                where: { roleId_permissionId: { roleId: superAdminRole.id, permissionId: p.id } },
                update: {},
                create: { roleId: superAdminRole.id, permissionId: p.id },
            });
        }
    }
    const adminEmail = 'admin@grahub.local';
    const hashedPassword = await bcrypt.hash('password123', 10);
    const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
    if (!existingAdmin) {
        await prisma.user.create({
            data: {
                email: adminEmail,
                password: hashedPassword,
                roles: {
                    create: {
                        roleId: superAdminRole.id
                    }
                }
            },
        });
        console.log(`Created super admin: ${adminEmail} / password123`);
    }
    console.log('Seed completed successfully');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map