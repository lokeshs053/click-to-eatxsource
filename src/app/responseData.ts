
export interface Restaurant {
    R: {
        res_id: number
    },
    apikey: string,
    id: string,
    name: string,
    url: string,
    location: {
        address: string,
        locality: string,
        city: string,
        city_id: number,
        latitude: string,
        longitude: string,
        zipcode: string,
        country_id: number,
        locality_verbose: string
    },
    switch_to_order_menu: number,
    cuisines: string,
    average_cost_for_two: number,
    price_range: number,
    currency: string,
    offers: Array<string>,
    opentable_support: number,
    is_zomato_book_res: number,
    mezzo_provider: string,
    is_book_form_web_view: number,
    book_form_web_view_url: string,
    book_again_url: string,
    thumb: string,
    user_rating: {
        aggregate_rating: string,
        rating_text: string,
        rating_color: string,
        votes: string
    },

    photos_url: string,
    menu_url: string,
    featured_image: string,
    has_online_delivery: number,
    is_delivering_now: number,
    include_bogo_offers: boolean,
    deeplink: string,
    is_table_reservation_supported: number,
    has_table_booking: number,
    events_url: string
}



export interface Cuisine {
    cuisine_id:number,
    cuisine_name:string
}