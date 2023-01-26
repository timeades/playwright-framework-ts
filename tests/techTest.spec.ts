import { test, expect } from '@playwright/test';


test('return all data', async ({request, baseURL}) => {
    const _response = await request.get(`${baseURL}`);
    expect(_response.ok()).toBeTruthy();
    expect(_response.status()).toBe(200);
    const returns = await _response.json();
    expect(returns.length).toBe(300);
    // return user name over 30
    let overThirties = returns.filter(function (e) {
        return e.age > 30;
    });
    console.log(overThirties);

    // for (let i = 0; i < returns.length; i++) {
    //     if (returns[i].age == 35) {
    //         console.log(returns[i].title = 'ms' + ' ' + returns[i].name + ' ' + returns[i].surname + ' :' +  returns[i].age);
    //     } 
    // }
})
