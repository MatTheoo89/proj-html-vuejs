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
    courses:[
        {
            imgPath:'artist-course-01-480x480.jpg',
            price:'18.00',
            name:'The Acrylic Painting Academy',
            lessons:'4',
            students:'50',
        },
        {
            imgPath:'artist-course-02-480x480.jpg',
            price:'21.00',
            name:'Drawing and Shading: Complete Course',
            lessons:'14',
            students:'50',
        },
        {
            imgPath:'artist-course-03-480x480.jpg',
            price:'19.00',
            name:'The Color Theory for Digital Artist',
            lessons:'7',
            students:'50',
        },
        {
            imgPath:'artist-course-04-480x480.jpg',
            price:'35.00',
            name:'Ultimate Guide to Digital Sketching for Beginner',
            lessons:'14',
            students:'50',
        },
        {
            imgPath:'artist-course-05-480x480.jpg',
            price:'19.00',
            name:'Portrait Drawing The Smart Way',
            lessons:'2',
            students:'50',
        },
        {
            imgPath:'artist-course-06-480x480.jpg',
            price:'19.00',
            name:'Mastering Watercolor Painting from Beginner',
            lessons:'9',
            students:'50',
        },
        {
            imgPath:'artist-course-07-480x480.jpg',
            price:'25.00',
            name:'The Art & Science of Drawing',
            lessons:'4',
            students:'50',
        },
        {
            imgPath:'artist-course-08-480x480.jpg',
            price:'22.00',
            name:'The Colored Pencil Drawing Course',
            lessons:'6',
            students:'50',
        },
    ],
    events:[
        {
            img:'artist-event-04-250x300.jpg',
            date:'NOV 22, 2020',
            name: 'Storytelling Workshop',
            city: 'Texas, Us',
        },
        {
            img:'artist-event-03-250x300.jpg',
            date:'OCT 10, 2020',
            name: 'Painting Art Contest 2020',
            city: 'New York, US',
        },
        {
            img:'artist-event-02-250x300.jpg',
            date:'NOV 23, 2020',
            name: 'International Art Fair 2020',
            city: 'Hamburg, Germany',
        },
        {
            img:'artist-event-01-250x300.jpg',
            date:'DEC 15, 2020',
            name: 'Street Performance : Call for Artist',
            city: 'Lilinois, US',
        },
    ],
    testimonials:[
        {
            title:'it\'s a choice of quality for people with special needs',
            quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur saepe laborum esse perferendis ut sint suscipit doloremque reiciendis rem incidunt!',
            image:'artist-testimonial-avatar-02.jpg',
            name:'Florence Themes',
            professional:'Multimedia Admin'
        },
        {
            title:'High level efficienty and scientific teaching methods',
            quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur saepe laborum esse perferendis ut sint suscipit doloremque reiciendis rem incidunt!',
            image:'artist-testimonial-avatar-04.jpg',
            name:'Mina Hollance',
            professional:'Frelancer'
        },
        {
            title:'Professional team of specialists and passionate mentors at reach',
            quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur saepe laborum esse perferendis ut sint suscipit doloremque reiciendis rem incidunt!',
            image:'artist-testimonial-avatar-01.jpg',
            name:'Madley Pondor',
            professional:'It Specialis'
        },
        {
            title:'I\'m Batman',
            quote: 'It\'s not so much who you are, as what you do, that qualifies you.',
            image:'artist-testimonial-avatar-03.jpg',
            name:'Bruce Wayne',
            professional:'Multi-Millionaire'
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