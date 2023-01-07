import { test, expect } from '@playwright/test';
import { baseUrl } from './utils/constants/urls'
import { 
    setLoginApiDown,
    setLoginApiUp
} from './utils/api/api'

test('error when login endpoint down', async ({ page }) => {
    
    await setLoginApiDown;

    await page.goto(`${baseUrl}`);
    
});