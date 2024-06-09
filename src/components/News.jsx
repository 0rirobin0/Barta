import React, { useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from '../components/NewsItem'

function News(props) {
    let headtext= props.mode=='dark'? 'light':'dark';
    const [article,setarticle] =useState( [
        {
          "article_id": "5c235a99e40f7ea82266a63f7614edbe",
          "title": "নিশ্ছিদ্র নিরাপত্তায় মোদির শপথ আজ",
          "link": "https://www.dailyjanakantha.com/international/news/724356",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": "টানা তৃতীয় মেয়াদে ভারতের প্রধানমন্ত্রী হিসেবে নরেন্দ্র মোদি আজ শপথ নিচ্ছেন। শপথ অনুষ্ঠান ঘিরে পুরো নয়া দিল্লিকে নিরাপত্তার চাদরে মুড়ে ফেলা হয়েছে। আজ স্থানীয় সময় সন্ধ্যা সাতটা ১৫ মিনিটে রাষ্ট্রপতি ভবন রাইসিনা হিলে এই শপথ অনুষ্ঠান হবে। রাষ্ট্রপতি দ্রৌপদী মুর্মু তাকে শপথ পড়াবেন। মোদির পর তার মন্ত্রিসভার অন্য সদস্যদের শপথ হবে। শপথে বিভিন্ন দেশের রাষ্ট্র ও সরকারপ্রধান ছাড়াও অন্তত আট হাজার অতিথি উপস্থিত থাকবেন। এই অনুষ্ঠানে যোগ দিতে বাংলাদেশের প্রধানমন্ত্রী শেখ হাসিনাসহ অন্যান্য অতিথি ইতোমধ্যে দিল্লি পৌঁছেছেন।খবর এনডিটিভি ও আনন্দবাজার অনলাইনের। খবরে বলা হয়েছে, শপথগ্রহণ অনুষ্ঠান নির্বিঘ্ন করতে এরই মধ্যে দিল্লিতে জারি করা হয়েছে সর্বোচ্চ সতকর্তা। আজকের শপথগ্রহণকে কেন্দ্র করে অনুষ্ঠানস্থল রাষ্ট্রপতি ভবনে পাঁচ কোম্পানি আধাসামরিক বাহিনীর জওয়ান ছাড়াও এনএসজি কমান্ডো, ড্রোন এবং স্নাইপার নিয়ে বহুস্তরের নিরাপত্তা ব্যবস্থা গড়ে তোলা হচ্ছে। অনুষ্ঠান চলার সময় যেকোনো অপরাধমূলক বা সন্ত্রাসী হুমকি রোধ করতে দিল্লিতে নো-ফ্লাই জোন ঘোষণা করা হয়েছে। এই বিধিনিষেধ ৯ থেকে ১০ জুন পর্যন্ত কার্যকর থাকবে।বিদেশী অতিথিদের হোটেলে বিশেষ প্রোটোকলসহ বাড়তি নিরাপত্তা ব্যবস্থাও নেওয়া হয়েছে। বিশেষ নিরাপত্তার আওতায় রয়েছে লীলা, তাজ, আইটিসি মৌর্য, ক্ল্যারিজেস এবং ওবেরয়ের মতো নামি হোটেলগুলো। অতিথিরা হোটেল থেকে অনুষ্ঠানস্থলে যাবেন নির্দিষ্ট পথে। এ সময় বিভিন্ন রাস্তা বন্ধ এবং ডাইভারশন করা হবে বলে ধারণা করা হচ্ছে।",
          "content": "ONLY AVAILABLE IN PAID PLANS",
          "pubDate": "2024-06-08 18:16:25",
          "image_url": "https://www.dailyjanakantha.com/media/imgAll/2024April/f2-2406081816.jpg",
          "source_id": "dailyjanakantha",
          "source_priority": 523245,
          "source_url": "https://www.dailyjanakantha.com",
          "source_icon": null,
          "language": "bengali",
          "country": [
            "bangladesh"
          ],
          "category": [
            "top"
          ],
          "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
          "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS"
        },
        {
          "article_id": "c6f67a8b76b75e5cb8f7a33bf3327af3",
          "title": "মন্ত্রীর কাছে চারটি দাবি জানান পাটচাষিরা, পেলেন শুধু আশ্বাস",
          "link": "https://www.prothomalo.com/bangladesh/district/pcqnvj7e2w",
          "keywords": null,
          "creator": [
            "নিজস্ব প্রতিবেদক"
          ],
          "video_url": null,
          "description": "শনিবার বেলা তিনটার দিকে ফরিদপুরের শিশু একাডেমি মিলনায়তনে পাট খাতসংশ্লিষ্ট অংশীজনের সঙ্গে এ মতবিনিময় সভা করা হয়।",
          "content": "ONLY AVAILABLE IN PAID PLANS",
          "pubDate": "2024-06-08 18:14:56",
          "image_url": "https://images.prothomalo.com/prothomalo-bangla%2F2024-06%2F72cbd593-3f78-46d2-bbc2-9160080c56e3%2FFaridpur_1.jpg?rect=0%2C0%2C2160%2C1134&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1",
          "source_id": "prothomalo",
          "source_priority": 22124,
          "source_url": "https://www.prothomalo.com",
          "source_icon": "https://i.bytvi.com/domain_icons/prothomalo.png",
          "language": "bengali",
          "country": [
            "bangladesh"
          ],
          "category": [
            "top"
          ],
          "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
          "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS"
        },
        {
          "article_id": "fc7db04349f87c83e2c6081eb56f23b5",
          "title": "বন্ধুত্ব আরও দৃঢ় হবে",
          "link": "https://www.dailyjanakantha.com/international/news/724355",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": "জওহরলাল নেহেরুর পর টানা তৃতীয়বার ভারতের প্রধানমন্ত্রী হিসেবে শপথ নিচ্ছেন নরেন্দ্র মোদি। তাঁর শপথ অনুষ্ঠানে যোগ দিতে শনিবার দুপুরে ভারতে গেছেন প্রধানমন্ত্রী শেখ হাসিনা। ভারতের প্রথম কোনো প্রধানমন্ত্রীর শপথ অনুষ্ঠানে যোগ দিচ্ছেন বাংলাদেশের প্রধানমন্ত্রী। আজ রবিবার শপথ অনুষ্ঠান শেষে সোমবারই দেশে ফিরবেন শেখ হাসিনা।",
          "content": "ONLY AVAILABLE IN PAID PLANS",
          "pubDate": "2024-06-08 18:13:30",
          "image_url": "https://www.dailyjanakantha.com/media/imgAll/2024April/f1-2406081813.jpg",
          "source_id": "dailyjanakantha",
          "source_priority": 523245,
          "source_url": "https://www.dailyjanakantha.com",
          "source_icon": null,
          "language": "bengali",
          "country": [
            "bangladesh"
          ],
          "category": [
            "top"
          ],
          "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
          "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS"
        },
        {
          "article_id": "9682997a728a012f7912f8d7581ee551",
          "title": "শুরুর ধাক্কা সামলে মিলারের ব্যাটে দ. আফ্রিকার জয়",
          "link": "https://www.risingbd.com/sports/news/559100",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": "নেদারল্যান্ডসের দেওয়া ১০৪ রানের টার্গেট তাড়া করতে নেমে ১২ রানেই ৪ উইকেট হারিয়ে বসে দক্ষিণ আফ্রিকা। একটা সময় মনে হয়েছিল জয়টা কঠিন হয়ে যাবে তাদের জন্য।",
          "content": "ONLY AVAILABLE IN PAID PLANS",
          "pubDate": "2024-06-08 18:12:12",
          "image_url": "https://cdn.risingbd.com/media/imgAll/2024June/South-Africa-Netherlands-2406081812.jpg",
          "source_id": "risingbd",
          "source_priority": 1729180,
          "source_url": "https://www.risingbd.com",
          "source_icon": "https://i.bytvi.com/domain_icons/risingbd.png",
          "language": "bengali",
          "country": [
            "bangladesh"
          ],
          "category": [
            "top"
          ],
          "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
          "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS"
        },
        {
          "article_id": "24d7febc6acdfd96833a85145bd02e5d",
          "title": "মোদির দুই ইচ্ছার কোনোটিই পূরণ হয়নি",
          "link": "https://www.prothomalo.com/world/india/9p57zvp868",
          "keywords": null,
          "creator": [
            "প্রতিনিধি"
          ],
          "video_url": null,
          "description": "প্রধানমন্ত্রী হিসেবে মোদি বরাবর ছুঁতে আগ্রহী ছিলেন দেশের প্রথম প্রধানমন্ত্রী জওহরলাল নেহরুর রেকর্ড। নেহরু ১৯৫২, ১৯৫৭ ও ১৯৬২ সালের নির্বাচন জিতে তিনবার প্রধানমন্ত্রী হয়েছিলেন।",
          "content": "ONLY AVAILABLE IN PAID PLANS",
          "pubDate": "2024-06-08 18:11:38",
          "image_url": "https://images.prothomalo.com/prothomalo-bangla%2F2024-06%2F9bf56aab-2054-4ba7-96da-5dd1210e0b95%2Fmodi.jpg?rect=0%2C177%2C2484%2C1304&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=https%3A%2F%2Fimages.prothomalo.com%2Fprothomalo-bangla%2F2022-01%2F5a36c819-05a2-4bfb-ac50-57dd67355acb%2FBanner_7814X143.jpg&overlay_position=bottom&overlay_width_pct=1",
          "source_id": "prothomalo",
          "source_priority": 22124,
          "source_url": "https://www.prothomalo.com",
          "source_icon": "https://i.bytvi.com/domain_icons/prothomalo.png",
          "language": "bengali",
          "country": [
            "bangladesh"
          ],
          "category": [
            "top"
          ],
          "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
          "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS"
        },
        {
          "article_id": "3bf86b8e0bfb0d67494101cf6abcf22e",
          "title": "ঢাকার যেসব এলাকায় আজ গ্যাস থাকবে না",
          "link": "https://www.ittefaq.com.bd/690036/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%AF%E0%A7%87%E0%A6%B8%E0%A6%AC-%E0%A6%8F%E0%A6%B2%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A7%9F-%E0%A6%86%E0%A6%9C-%E0%A6%97%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8-%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A6%AC%E0%A7%87-%E0%A6%A8%E0%A6%BE",
          "keywords": [
            "তিতাস গ্যাস"
          ],
          "creator": [
            "ইত্তেফাক ডিজিটাল ডেস্ক"
          ],
          "video_url": null,
          "description": "জরুরিভিত্তিতে পাইপ লাইন স্থানান্তর করার কাজের জন্য রোববার (৯ জুন) রাজধানীর বাসাবো, মুগদা, মাণ্ডা হয়ে ধলপুর পর্যন্ত এলাকায় গ্যাস সংযোগ ৩ ঘণ্টার জন্য বন্ধ রাখা হবে।শনিবার (৮ জুন) তিতাস গ্যাস কর্তৃপক্ষ এক বিজ্ঞপ্তিতে এ তথ্য জানায়।বিজ্ঞপ্তিতে বলা হয়, রবিবার সকাল ১০টা থেকে দুপুর ১টা পর্যন্ত ৩ ঘণ্টা মুগদা, মাণ্ডা, মানিকনগর (ধলপুর), বাসাবো, শাহজাহানপুর এবং গোপীবাগ এলাকায় সব শ্রেণির গ্রাহকের গ্যাস...বিস্তারিত",
          "content": "ONLY AVAILABLE IN PAID PLANS",
          "pubDate": "2024-06-08 18:10:00",
          "image_url": "https://cdn.ittefaqbd.com/contents/cache/images/300x300x1/uploads/media/2023/04/07/ed71e67a96a6239ec185a4181fe0cb08-642f84270f090.jpg?jadewits_media_id=97113",
          "source_id": "ittefaq",
          "source_priority": 118342,
          "source_url": "http://ittefaq.com.bd",
          "source_icon": "https://i.bytvi.com/domain_icons/ittefaq.png",
          "language": "bengali",
          "country": [
            "bangladesh"
          ],
          "category": [
            "top"
          ],
          "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
          "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS"
        },
        {
          "article_id": "8c8c6f5fbdd8d95b4e60d54e8d1cc008",
          "title": "মিলারের ব্যাটে অঘটন এড়ালো দক্ষিণ আফ্রিকা",
          "link": "https://www.ittefaq.com.bd/690040/%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A7%87-%E0%A6%85%E0%A6%98%E0%A6%9F%E0%A6%A8-%E0%A6%8F%E0%A7%9C%E0%A6%BE%E0%A6%B2%E0%A7%8B-%E0%A6%A6%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BF%E0%A6%A3-%E0%A6%86%E0%A6%AB%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A6%BE%C2%A0",
          "keywords": [
            "ক্রিকেট",
            "নেদারল্যান্ডস",
            "দক্ষিণ আফ্রিকা ক্রিকেট দল",
            "টি-টোয়েন্টি বিশ্বকাপ ২০২৪"
          ],
          "creator": [
            "ইত্তেফাক ডিজিটাল ডেস্ক"
          ],
          "video_url": null,
          "description": "শক্তির বিচারে লেদারল্যান্ডসের চেয়ে বেশ এগিয়ে দক্ষিণ আফ্রিকা। শুরুটাও করে বেশ ভালোই। ডাচদের মাত্র ১০৩ রানে আটকে দিয়েছিল প্রোটিয়া বোলাররা। তবে ছোট্ট লক্ষ্য তাড়া করতে নেমে বেশ বেগ পেতে হয়েছে দক্ষিণ আফ্রিকাকে। তবে ডেভিড মিলারের ফিফটিতে কোনো অঘটন ঘটেনি। ডাচদের ৪ উইকেটে হারিয়ে টি-টোয়েন্টি বিশ্বকাপে টানা দ্বিতীয় জয় তুলে নিয়েছে প্রোটিয়ারা।শনিবার (৮ জুন) নিউ ইয়র্কের নাসাউ কাউন্টি আন্তর্জাতিক ক্রিকেট...বিস্তারিত",
          "content": "ONLY AVAILABLE IN PAID PLANS",
          "pubDate": "2024-06-08 18:03:08",
          "image_url": "https://cdn.ittefaqbd.com/contents/cache/images/300x300x1/uploads/media/2024/06/09/c2aba4919c7299a395dff66565486e2a-66649cda2abe4.jpg?jadewits_media_id=172402",
          "source_id": "ittefaq",
          "source_priority": 118342,
          "source_url": "http://ittefaq.com.bd",
          "source_icon": "https://i.bytvi.com/domain_icons/ittefaq.png",
          "language": "bengali",
          "country": [
            "bangladesh"
          ],
          "category": [
            "sports"
          ],
          "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
          "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS"
        },
        {
          "article_id": "b300a0162dc9dedb22741c373d97c5f4",
          "title": "আজ শেষ হচ্ছে ষষ্ঠ উপজেলা নির্বাচন",
          "link": "https://www.banglatribune.com/national/850450/%E0%A6%86%E0%A6%9C-%E0%A6%B6%E0%A7%87%E0%A6%B7-%E0%A6%B9%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%B7%E0%A6%B7%E0%A7%8D%E0%A6%A0-%E0%A6%89%E0%A6%AA%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE-%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%9A%E0%A6%A8",
          "keywords": [
            "নির্বাচন কমিশন",
            "ভোট",
            "উপজেলা নির্বাচন"
          ],
          "creator": [
            "বাংলা ট্রিবিউন রিপোর্ট"
          ],
          "video_url": null,
          "description": "ঘূর্ণিঝড় রিমালে স্থগিত ১৯টি উপজেলার ভোট আজ রবিবার (৯ জুন) অনুষ্ঠিত হচ্ছে। সকাল ৮টা থেকে বিকাল ৪টা পর্যন্ত বিরতিহীনভাবে চলবে এ ভোটগ্রহণ। অবাধ ও সুষ্ঠুভাবে নির্বাচন আয়োজনের সব প্রস্তুতি ইতোমধ্যেই শেষ করেছে নির্বাচন কমিশন (ইসি)।নির্বাচন উপলক্ষে শনিবার (৮ জুন) দুর্গম এলাকার কেন্দ্রগুলোতে ব্যালট পেপারসহ নির্বাচনি সরঞ্জাম পাঠিয়েছে কমিশন। ভোটের দিন ভোরে বাকি কেন্দ্রগুলোতে এসব সরঞ্জাম পাঠানো হবে। এর...বিস্তারিত",
          "content": "ONLY AVAILABLE IN PAID PLANS",
          "pubDate": "2024-06-08 18:02:00",
          "image_url": "https://cdn.banglatribune.net/contents/cache/images/300x300x1/uploads/media/2024/03/20/433720017_1197388171253722_542680481326520455_n-18f59f5285dc9148bcf20cf084d956d3.png?jadewits_media_id=908447",
          "source_id": "banglatribune",
          "source_priority": 685343,
          "source_url": "https://www.banglatribune.com",
          "source_icon": null,
          "language": "bengali",
          "country": [
            "bangladesh"
          ],
          "category": [
            "top"
          ],
          "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
          "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS"
        },
        {
          "article_id": "228336875f12ecb16652c60906c50682",
          "title": "ভোলায় বরফকলের গ্যাস সিলিন্ডার বিস্ফোরণে নারীর মৃত্যু",
          "link": "https://www.banglatribune.com/country/barishal/850455/%E0%A6%AD%E0%A7%8B%E0%A6%B2%E0%A6%BE%E0%A7%9F-%E0%A6%AC%E0%A6%B0%E0%A6%AB%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%B0-%E0%A6%97%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8-%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%AB%E0%A7%8B%E0%A6%B0%E0%A6%A3%E0%A7%87-%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%B0",
          "keywords": [
            "মৃত্যু",
            "বিস্ফোরণ"
          ],
          "creator": [
            "ভোলা প্রতিনিধি"
          ],
          "video_url": null,
          "description": "ভোলার দৌলতখানে বরফকলের গ্যাস সিলিন্ডার বিস্ফোরণে সিদ্দিকা খাতুন নামে এক নারীর মৃত্যু হয়েছে। এ ঘটনায় আহত হয়েছে দুই শিশু। শনিবার (৮ জুন) সন্ধ্যা ৭টার দিকে পৌরসভার ৩ নম্বর ওয়ার্ডের স্লুইসগেট সংলগ্ন বেড়িবাঁধের ওপর খোরশেদ আলম দরবেশের বরফকলে এ ঘটনা ঘটে। মারা যাওয়া সিদ্দিকা খাতুন পৌরসভার ৩ নম্বর ওয়ার্ডের মৃত হাদিসের স্ত্রী। আহতরা হলো স্থানীয় বাসিন্দা মফিজের দেড় বছরের মেয়ে ফাইজা ও বেল্লালের মেয়ে...বিস্তারিত",
          "content": "ONLY AVAILABLE IN PAID PLANS",
          "pubDate": "2024-06-08 18:01:46",
          "image_url": "https://cdn.banglatribune.net/contents/cache/images/300x300x1/uploads/media/2024/06/09/-c166dc1b1e391d103886f1fc4cce42c7.jpg?jadewits_media_id=920506",
          "source_id": "banglatribune",
          "source_priority": 685343,
          "source_url": "https://www.banglatribune.com",
          "source_icon": null,
          "language": "bengali",
          "country": [
            "bangladesh"
          ],
          "category": [
            "top"
          ],
          "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
          "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS"
        },
        {
          "article_id": "dc575386bb47546f25dcd2c862b91f9c",
          "title": "পাবনায় আওয়ামী লীগ নেতাকে গুলি করে হত্যা",
          "link": "https://www.prothomalo.com/bangladesh/district/l32nxuihdg",
          "keywords": null,
          "creator": [
            "প্রতিনিধি"
          ],
          "video_url": null,
          "description": "শনিবার রাতে জেলা সদরের ভাঁড়ারা ইউনিয়নের নলদহ নতুন পাড়া গ্রামে এ ঘটনা ঘটে।",
          "content": "ONLY AVAILABLE IN PAID PLANS",
          "pubDate": "2024-06-08 18:00:22",
          "image_url": "https://images.prothomalo.com/prothomalo%2Fimport%2Fmedia%2F2018%2F01%2F12%2F9da21a03756596fec71149b5d722c772-5a57feae46f0a.jpg?rect=0%2C0%2C1600%2C840&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1",
          "source_id": "prothomalo",
          "source_priority": 22124,
          "source_url": "https://www.prothomalo.com",
          "source_icon": "https://i.bytvi.com/domain_icons/prothomalo.png",
          "language": "bengali",
          "country": [
            "bangladesh"
          ],
          "category": [
            "top"
          ],
          "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
          "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS"
        }
      ]);
   

    return (
        <div>
            <h3 className={'my-5 text-'+headtext} >BARTA24 TOP HEADLINES </h3>
            <div className="container" >
                <div className="row">
                  {article.map((news)=>
                  (
                    <div className="col-md-3 my-2" key={news.article_id}>
                    <NewsItem mode={props.mode}  title={news.title} description={news.description} imgurl={news.image_url}></NewsItem>
                    </div>
                   
                  ))}
                       
                </div>
            </div>
        </div>
    )
}

News.propTypes = {
 
}

export default News

