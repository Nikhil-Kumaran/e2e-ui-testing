import {restaurantList, restaurantPalmshore, biriyaniSearchQuery, restaurantParamount} from './responses'

export function apiCalls(page){

    page.on('request', async (request) => {
        if(request.url().includes('developers.zomato.com/api/')){

            if(request.url().includes('search?lat')){
                request.respond({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify(restaurantList),
                });
            }
            if(request.url().includes('search?q=biriyani')){
                request.respond({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify(biriyaniSearchQuery),
                });
            }
            if(request.url().includes('restaurant?res_id=66377')){
                request.respond({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify(restaurantParamount),
                });
            }
            if(request.url().includes('restaurant?res_id=18984617')){
                request.respond({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify(restaurantPalmshore),
                });
            }
        }
        else {
            request.continue();
        }

    });
      
}