import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name: 'Amelie',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products:[
        {
            name:"ARTEZA Outils de Sculpture",
            image:"/images/01.jpg",
            category:"equipment stencils",
            description:"blabla",
            price:30.99,
            countInStock:2,
            numReviews:8,
            rating: 4,
            website:"https://www.amazon.fr/ARTEZA-Ensemble-Sculpture-Professionnel-Cartonn%C3%A9e/dp/B074SXW7X3/ref=asc_df_B074SXW7X3/?tag=googshopfr-21&linkCode=df0&hvadid=227964555245&hvpos=&hvnetw=g&hvrand=7371772830080740014&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9055818&hvtargid=pla-420717610049&psc=1"
        },
        {
            name:"SENHAI Outils de sculpture pour pâte polymère",
            image:"/images/02.jpg",
            category:"equipment stencils",
            description:"blabla",
            price:12.99,
            countInStock:8,
            numReviews:8,
            rating: 4,
            website:"https://www.amazon.fr/sculpture-polym%C3%A8re-caoutchouc-dempreinte-c%C3%A9ramique/dp/B07S8TH4KV/ref=asc_df_B07S8TH4KV/?tag=googshopfr-21&linkCode=df0&hvadid=354074254997&hvpos=&hvnetw=g&hvrand=7371772830080740014&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9055818&hvtargid=pla-777534104593&psc=1&tag=&ref=&adgrpid=70569416599&hvpone=&hvptwo=&hvadid=354074254997&hvpos=&hvnetw=g&hvrand=7371772830080740014&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9055818&hvtargid=pla-777534104593"
        },
        {
            name:"30 Outils de sculpture sur argile artisanale",
            image:"/images/03.jpg",
            category:"equipment stencils",       
            description:"blabla",     
            price:11,
            countInStock:2,
            numReviews:8,
            rating: 4,
            website:"https://www.wish.com/product/5da56717bfa84d0b75ea680b?hide_login_modal=true&from_ad=goog_shopping&_display_country_code=FR&_force_currency_code=EUR&pid=googleadwords_int&c=%7BcampaignId%7D&ad_cid=5da56717bfa84d0b75ea680b&ad_cc=FR&ad_lang=FR&ad_curr=EUR&ad_price=15.00&campaign_id=8143443324&gclid=EAIaIQobChMIh-zdsPmd8AIVxfhRCh3WBQ4MEAQYBSABEgIDbfD_BwE&share=web"
        },
        {
            name:"Kit de sculpture en argile",
            image:"/images/04.jpg",
            category:"equipment stencils",
            description:"blabla",
            price:9.53,
            countInStock:2,
            numReviews:8,
            rating: 4,
            website:"https://www.aliexpress.com/item/32953096668.html?albpd=fr32953096668&acnt=248-630-5778&aff_platform=aaf&albpg=539263010115&netw=u&albcp=10191220526&pvid=4bde0ed9-4ccf-45c1-a1ba-0a97ff444e72&sk=UneMJZVf&scm=1007.23534.123999.0&trgt=539263010115&terminal_id=d3f99f2ae5be4c108ca3f9460cc17fa1&needSmbHouyi=false&albbt=Google_7_shopping&src=google&crea=fr32953096668&aff_fcid=c39c584f0cc641c1b8d60295598000b2-1619510467424-04854-UneMJZVf&gclid=EAIaIQobChMIzYeup_qd8AIVRJ3VCh07uQSKEAQYDSABEgKBcPD_BwE&albag=107473525328&aff_fsk=UneMJZVf&albch=shopping&albagn=888888&isSmbAutoCall=false&aff_trace_key=c39c584f0cc641c1b8d60295598000b2-1619510467424-04854-UneMJZVf&rmsg=do_not_replacement&device=c&gclsrc=aw.ds"
        },
        {
            name:"Nouvelle roue, disques interchangeables",
            image:"/images/05.jpg",
            category:"equipment wheel",
            description:"blabla",
            price:59.99,
            countInStock:2,
            numReviews:8,
            rating: 4,
            website:"https://fra.grandado.com/products/nouvelle-machine-de-roue-de-poterie-de-plateau-tournant-electrique-avec-le-tournevis-hexagonal-de-plateau-adaptateur-de-puissance-bricolage-en-ceramique"
        },
        {
            name:"Tour De Poterie professionel",
            image:"/images/06.jpg",
            category:"equipment wheel",
            description:"blabla",
            price:3.99,
            countInStock:2,
            numReviews:8,
            rating: 4,
            website:"https://vevor.fr/products/280w-250mm-electrique-roue-tours-de-poterie-machine-ceramique-argile-potier-kit?gclid=EAIaIQobChMIzYeup_qd8AIVRJ3VCh07uQSKEAQYCSABEgJDYvD_BwE"
        }
    ]
}

export default data