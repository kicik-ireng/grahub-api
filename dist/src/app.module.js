"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const permissions_module_1 = require("./permissions/permissions.module");
const me_module_1 = require("./me/me.module");
const regions_module_1 = require("./regions/regions.module");
const kelurahan_module_1 = require("./kelurahan/kelurahan.module");
const rw_module_1 = require("./rw/rw.module");
const rt_module_1 = require("./rt/rt.module");
const residents_module_1 = require("./residents/residents.module");
const families_module_1 = require("./families/families.module");
const resident_mutations_module_1 = require("./resident-mutations/resident-mutations.module");
const births_module_1 = require("./births/births.module");
const deaths_module_1 = require("./deaths/deaths.module");
const letters_module_1 = require("./letters/letters.module");
const letter_types_module_1 = require("./letter-types/letter-types.module");
const letter_templates_module_1 = require("./letter-templates/letter-templates.module");
const letter_approvals_module_1 = require("./letter-approvals/letter-approvals.module");
const letter_verification_module_1 = require("./letter-verification/letter-verification.module");
const dues_module_1 = require("./dues/dues.module");
const payments_module_1 = require("./payments/payments.module");
const finance_module_1 = require("./finance/finance.module");
const patrol_module_1 = require("./patrol/patrol.module");
const activities_module_1 = require("./activities/activities.module");
const complaints_module_1 = require("./complaints/complaints.module");
const emergency_contacts_module_1 = require("./emergency-contacts/emergency-contacts.module");
const announcements_module_1 = require("./announcements/announcements.module");
const polls_module_1 = require("./polls/polls.module");
const facilities_module_1 = require("./facilities/facilities.module");
const volunteers_module_1 = require("./volunteers/volunteers.module");
const documents_module_1 = require("./documents/documents.module");
const notifications_module_1 = require("./notifications/notifications.module");
const whatsapp_module_1 = require("./whatsapp/whatsapp.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const insights_module_1 = require("./insights/insights.module");
const reports_module_1 = require("./reports/reports.module");
const imports_module_1 = require("./imports/imports.module");
const audit_logs_module_1 = require("./audit-logs/audit-logs.module");
const activity_logs_module_1 = require("./activity-logs/activity-logs.module");
const settings_module_1 = require("./settings/settings.module");
const health_module_1 = require("./health/health.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            permissions_module_1.PermissionsModule,
            me_module_1.MeModule,
            regions_module_1.RegionsModule,
            kelurahan_module_1.KelurahanModule,
            rw_module_1.RwModule,
            rt_module_1.RtModule,
            residents_module_1.ResidentsModule,
            families_module_1.FamiliesModule,
            resident_mutations_module_1.ResidentMutationsModule,
            births_module_1.BirthsModule,
            deaths_module_1.DeathsModule,
            letters_module_1.LettersModule,
            letter_types_module_1.LetterTypesModule,
            letter_templates_module_1.LetterTemplatesModule,
            letter_approvals_module_1.LetterApprovalsModule,
            letter_verification_module_1.LetterVerificationModule,
            dues_module_1.DuesModule,
            payments_module_1.PaymentsModule,
            finance_module_1.FinanceModule,
            patrol_module_1.PatrolModule,
            activities_module_1.ActivitiesModule,
            complaints_module_1.ComplaintsModule,
            emergency_contacts_module_1.EmergencyContactsModule,
            announcements_module_1.AnnouncementsModule,
            polls_module_1.PollsModule,
            facilities_module_1.FacilitiesModule,
            volunteers_module_1.VolunteersModule,
            documents_module_1.DocumentsModule,
            notifications_module_1.NotificationsModule,
            whatsapp_module_1.WhatsappModule,
            dashboard_module_1.DashboardModule,
            insights_module_1.InsightsModule,
            reports_module_1.ReportsModule,
            imports_module_1.ImportsModule,
            audit_logs_module_1.AuditLogsModule,
            activity_logs_module_1.ActivityLogsModule,
            settings_module_1.SettingsModule,
            health_module_1.HealthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map