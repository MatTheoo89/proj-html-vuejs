import { reactive } from "vue";

export const store = reactive({

    menuHead:[
        {
            text: 'Home',
            href: '#',
            active: false,
        },
        {
            text: 'Pages',
            href: '#',
            active: false,
        },
        {
            text: 'Courses',
            href: '#',
            active: false,
        },
        {
            text: 'Features',
            href: '#',
            active: false,
        },
        {
            text: 'Blog',
            href: '#',
            active: false,
        },
        {
            text: 'Shop',
            href: '#',
            active: false,
        },
    ],
    menuFoot1:[
        {
            text: 'Start here',
            href: '#',
        },
        {
            text: 'Success ',
            href: '#',
        },
        {
            text: 'story',
            href: '#',
        },
        {
            text: 'Blog',
            href: '#',
        },
        {
            text: 'Courses',
            href: '#',
        },
        {
            text: 'Contact Us',
            href: '#',
        },
    ],
    menuFoot2:[
        {
            text: 'Membership',
            href: '#',
        },
        {
            text: 'Purchase guide',
            href: '#',
        },
        {
            text: 'Privacy policy',
            href: '#',
        },
        {
            text: 'Courses',
            href: '#',
        },
        {
            text: 'Terms of services',
            href: '#',
        },
    ],

    imgFooter:[
            {
                nameImg: 'image1',
                path: '120084500_197897808368764_8114555493043279565_n.jpg'
            },
            {
                nameImg: 'image2',
                path: '120012142_177596140500760_8623485824101406058_n.jpg'
            },
            {
                nameImg: 'image3',
                path: '120099363_364334431619755_7198812647386067017_n.jpg'
            }
    ],
    
});