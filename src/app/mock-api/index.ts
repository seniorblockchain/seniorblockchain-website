import { WhitePaperMockApi } from 'app/mock-api/apps/whitepaper/api';
import { DocsMockApi } from './apps/docs/api';
import { HelpCenterMockApi } from './apps/help-center/api';
import { NavigationMockApi } from './common/navigation/api';
import { NotificationsMockApi } from './common/notifications/api';

export const mockApiServices = [
    DocsMockApi,
    WhitePaperMockApi,
    NavigationMockApi,
    NotificationsMockApi,
    HelpCenterMockApi
];
