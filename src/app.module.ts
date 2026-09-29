import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { MeModule } from './me/me.module';
import { RegionsModule } from './regions/regions.module';
import { KelurahanModule } from './kelurahan/kelurahan.module';
import { RwModule } from './rw/rw.module';
import { RtModule } from './rt/rt.module';
import { ResidentsModule } from './residents/residents.module';
import { FamiliesModule } from './families/families.module';
import { ResidentMutationsModule } from './resident-mutations/resident-mutations.module';
import { BirthsModule } from './births/births.module';
import { DeathsModule } from './deaths/deaths.module';
import { LettersModule } from './letters/letters.module';
import { LetterTypesModule } from './letter-types/letter-types.module';
import { LetterTemplatesModule } from './letter-templates/letter-templates.module';
import { LetterApprovalsModule } from './letter-approvals/letter-approvals.module';
import { LetterVerificationModule } from './letter-verification/letter-verification.module';
import { DuesModule } from './dues/dues.module';
import { PaymentsModule } from './payments/payments.module';
import { FinanceModule } from './finance/finance.module';
import { PatrolModule } from './patrol/patrol.module';
import { ActivitiesModule } from './activities/activities.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { EmergencyContactsModule } from './emergency-contacts/emergency-contacts.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { PollsModule } from './polls/polls.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { VolunteersModule } from './volunteers/volunteers.module';
import { DocumentsModule } from './documents/documents.module';
import { NotificationsModule } from './notifications/notifications.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { InsightsModule } from './insights/insights.module';
import { ReportsModule } from './reports/reports.module';
import { ImportsModule } from './imports/imports.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { ActivityLogsModule } from './activity-logs/activity-logs.module';
import { SettingsModule } from './settings/settings.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    MeModule,
    RegionsModule,
    KelurahanModule,
    RwModule,
    RtModule,
    ResidentsModule,
    FamiliesModule,
    ResidentMutationsModule,
    BirthsModule,
    DeathsModule,
    LettersModule,
    LetterTypesModule,
    LetterTemplatesModule,
    LetterApprovalsModule,
    LetterVerificationModule,
    DuesModule,
    PaymentsModule,
    FinanceModule,
    PatrolModule,
    ActivitiesModule,
    ComplaintsModule,
    EmergencyContactsModule,
    AnnouncementsModule,
    PollsModule,
    FacilitiesModule,
    VolunteersModule,
    DocumentsModule,
    NotificationsModule,
    WhatsappModule,
    DashboardModule,
    InsightsModule,
    ReportsModule,
    ImportsModule,
    AuditLogsModule,
    ActivityLogsModule,
    SettingsModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
