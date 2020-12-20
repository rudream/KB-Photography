import citiesOne from "./media/gallery/cities/1.jpg";
import citiesTwo from "./media/gallery/cities/2.jpg";
import citiesThree from "./media/gallery/cities/3.jpg";
import citiesFour from "./media/gallery/cities/4.jpg";
import citiesFive from "./media/gallery/cities/5.jpg";
import citiesSix from "./media/gallery/cities/6.jpg";
import citiesSeven from "./media/gallery/cities/7.jpg";
import citiesEight from "./media/gallery/cities/8.jpg";
import citiesPreview from "./media/gallery/preview-pics/cities.jpg";

import internationalOne from "./media/gallery/international/1.jpg";
import internationalTwo from "./media/gallery/international/2.jpg";
import internationalThree from "./media/gallery/international/3.jpg";
import internationalFour from "./media/gallery/international/4.jpg";
import internationalFive from "./media/gallery/international/5.jpg";
import internationalSix from "./media/gallery/international/6.jpg";
import internationalSeven from "./media/gallery/international/7.jpg";
import internationalEight from "./media/gallery/international/8.jpg";
import internationalPreview from "./media/gallery/preview-pics/international.jpg";

import lakesOne from "./media/gallery/lakes/1.jpg";
import lakesTwo from "./media/gallery/lakes/2.jpg";
import lakesThree from "./media/gallery/lakes/3.jpg";
import lakesFour from "./media/gallery/lakes/4.jpg";
import lakesFive from "./media/gallery/lakes/5.jpg";
import lakesSix from "./media/gallery/lakes/6.jpg";
import lakesSeven from "./media/gallery/lakes/7.jpg";
import lakesEight from "./media/gallery/lakes/8.jpg";
import lakesPreview from "./media/gallery/preview-pics/lakes.jpg";

import mountainsOne from "./media/gallery/mountains/1.jpg";
import mountainsTwo from "./media/gallery/mountains/2.jpg";
import mountainsThree from "./media/gallery/mountains/3.jpg";
import mountainsFour from "./media/gallery/mountains/4.jpg";
import mountainsFive from "./media/gallery/mountains/5.jpg";
import mountainsSix from "./media/gallery/mountains/6.jpg";
import mountainsSeven from "./media/gallery/mountains/7.jpg";
import mountainsEight from "./media/gallery/mountains/8.jpg";
import mountainsPreview from "./media/gallery/preview-pics/mountains.jpg";

import winterOne from "./media/gallery/winter/1.jpg";
import winterTwo from "./media/gallery/winter/2.jpg";
import winterThree from "./media/gallery/winter/3.jpg";
import winterFour from "./media/gallery/winter/4.jpg";
import winterFive from "./media/gallery/winter/5.jpg";
import winterSix from "./media/gallery/winter/6.jpg";
import winterSeven from "./media/gallery/winter/7.jpg";
import winterEight from "./media/gallery/winter/8.jpg";
import winterPreview from "./media/gallery/preview-pics/winter.jpg";

const CollectionsData = () => {
    return [
        {
            title: "Cities",
            url: "/gallery/cities",
            preview: citiesPreview,
            images: [
                {
                    id: 1,
                    src: citiesOne,
                    alt: "Toronto | Nathan Phillips Square",
                },
                {
                    id: 2,
                    src: citiesTwo,
                    alt: "San Francisco",
                },
                {
                    id: 3,
                    src: citiesThree,
                    alt: "Algeria | Algiers",
                },
                {
                    id: 4,
                    src: citiesFour,
                    alt: "Toronto | CN Tower",
                },
                {
                    id: 5,
                    src: citiesFive,
                    alt: "Italy | Rome",
                },
                {
                    id: 6,
                    src: citiesSix,
                    alt: "Toronto | Downtown",
                },
                {
                    id: 7,
                    src: citiesSeven,
                    alt: "Toronto | Financial District",
                },
                {
                    id: 8,
                    src: citiesEight,
                    alt: "Toronto | Nathan Phillips Square",
                },
            ],
        },
        {
            title: "International",
            url: "/gallery/international",
            preview: internationalPreview,
            images: [
                {
                    id: 1,
                    src: internationalOne,
                    alt: "Abu Dhabi | Sheikh Zayed Grand Mosque",
                },
                {
                    id: 2,
                    src: internationalTwo,
                    alt: "San Francisco | Golden Gate Bridge",
                },
                {
                    id: 3,
                    src: internationalThree,
                    alt: "Abu Dhabi | Sheikh Zayed Grand Mosque",
                },
                {
                    id: 4,
                    src: internationalFour,
                    alt: "Algeria | Dellys",
                },
                {
                    id: 5,
                    src: internationalFive,
                    alt: "United Arab Emirates | Desert",
                },
                {
                    id: 6,
                    src: internationalSix,
                    alt: "Algeria | Bejaia",
                },
                {
                    id: 7,
                    src: internationalSeven,
                    alt: "Algeria | Tigzirt",
                },
                {
                    id: 8,
                    src: internationalEight,
                    alt: "Vietnam | Ha Long Bay",
                },
            ],
        },
        {
            title: "Lakes",
            url: "/gallery/lakes",
            preview: lakesPreview,
            images: [
                {
                    id: 1,
                    src: lakesOne,
                    alt: "Banff | Moraine Lake",
                },
                {
                    id: 2,
                    src: lakesTwo,
                    alt: "Jasper | Peyto Lake",
                },
                {
                    id: 3,
                    src: lakesThree,
                    alt: "Jasper | Bow Lake",
                },
                {
                    id: 4,
                    src: lakesFour,
                    alt: "Banff | Lake Louise",
                },
                {
                    id: 5,
                    src: lakesFive,
                    alt: "Banff | Lake Louise",
                },
                {
                    id: 6,
                    src: lakesSix,
                    alt: "Banff | Vermillion Lakes",
                },
                {
                    id: 7,
                    src: lakesSeven,
                    alt: "Banff | Lake Minnewanka",
                },
                {
                    id: 8,
                    src: lakesEight,
                    alt: "Banff | Two Jack Lake",
                },
            ],
        },
        {
            title: "Winter",
            url: "/gallery/winter",
            preview: winterPreview,
            images: [
                {
                    id: 1,
                    src: winterOne,
                    alt: "Banff | Morant Curve",
                },
                {
                    id: 2,
                    src: winterTwo,
                    alt: "Banff | Lake Minnewanka",
                },
                {
                    id: 3,
                    src: winterThree,
                    alt: "Jasper | Peyto Lake",
                },
                {
                    id: 4,
                    src: winterFour,
                    alt: "Kananaskis | Upper Lake",
                },
                {
                    id: 5,
                    src: winterFive,
                    alt: "Banff | Two Jack Lake",
                },
                {
                    id: 6,
                    src: winterSix,
                    alt: "Jasper | Glacier",
                },
                {
                    id: 7,
                    src: winterSeven,
                    alt: "Banff | Lake Minnewanka",
                },
                {
                    id: 8,
                    src: winterEight,
                    alt: "Jasper | Mistaya Lake",
                },
            ],
        },
        {
            title: "Mountains",
            url: "/gallery/mountains",
            preview: mountainsPreview,
            images: [
                {
                    id: 1,
                    src: mountainsOne,
                    alt: "Banff | Sentinel Pass",
                },
                {
                    id: 2,
                    src: mountainsTwo,
                    alt: "Banff | Mt Norquay",
                },
                {
                    id: 3,
                    src: mountainsThree,
                    alt: "Banff | Castle Mountain",
                },
                {
                    id: 4,
                    src: mountainsFour,
                    alt: "Banff | Lake Minnewanka",
                },
                {
                    id: 5,
                    src: mountainsFive,
                    alt: "Kananaskis | Road",
                },
                {
                    id: 6,
                    src: mountainsSix,
                    alt: "Banff | Mt Norquay",
                },
                {
                    id: 7,
                    src: mountainsSeven,
                    alt: "Canmore | East End of Rundle",
                },
                {
                    id: 8,
                    src: mountainsEight,
                    alt: "Canmore | Spray Valley",
                },
            ],
        },
    ];
};

export default CollectionsData;
