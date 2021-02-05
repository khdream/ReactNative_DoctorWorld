export const categories = [
  {
    id: 1,
    name: 'OTC Medicines',
    photo: require('../../assets/image/category1.png'),
  },
  {id: 2, name: 'Diabetes', photo: require('../../assets/image/category2.png')},
  {
    id: 3,
    name: 'Personal Care',
    photo: require('../../assets/image/category3.png'),
  },
  {
    id: 4,
    name: 'Baby & Mother',
    photo: require('../../assets/image/category4.png'),
  },
  {
    id: 5,
    name: 'Health Aid',
    photo: require('../../assets/image/category5.png'),
  },
  {id: 6, name: 'Wellness', photo: require('../../assets/image/category6.png')},
];
export const doctor_categories = [
  {
    id: 1,
    name: 'Doctors',
    photo: require('../../assets/icon/doc1.png'),
  },
  {id: 2, name: 'Dentist', photo: require('../../assets/icon/doc2.png')},
  {
    id: 3,
    name: 'Ayurvedic',
    photo: require('../../assets/icon/doc3.png'),
  },
  {
    id: 4,
    name: 'Therapist',
    photo: require('../../assets/icon/doc4.png'),
  },
];
export const medicines = [
  {id: 1, name: 'Vics VapoRub Balm', price: '$6.00', photo: 'medicine1.png'},
  {
    id: 2,
    name: 'Non Drosy Laritin Tablet',
    price: '$3.00',
    photo: 'medicine2.png',
  },
  {
    id: 3,
    name: 'Allergy Relief Topcare Tablet',
    price: '$4.00',
    photo: 'medicine3.png',
  },
  {id: 4, name: 'Arber OTC Tablet', price: '$6.00', photo: 'medicine4.png'},
  {id: 5, name: 'Xenical 120mg Tablet', price: '$3.00', photo: 'medicine5.png'},
  {
    id: 6,
    name: 'Salospir 100mg Tablet',
    price: '$4.50',
    photo: 'medicine6.png',
  },
];

export const doctors = [
  {
    id: 1,
    name: 'Dr. Joseph Williamson',
    job: 'Cardiac Surgeon',
    address: 'At Apple Hospital, Walter street, Wallington, New York.',
    experience: '22 years',
    Fees: '$30',
    Feedback: 152,
    photo: require('../../assets/image/doctor1.png'),
  },
  {
    id: 2,
    name: 'Dr. Adom Johnson',
    job: 'Cardiac Surgeon',
    address: 'At Opus Clinic, Edion street, Wallington, New York.',
    experience: '18 years',
    Fees: '$28',
    Feedback: 124,
    photo: require('../../assets/image/doctor2.png'),
  },
  {
    id: 3,
    name: 'Dr. Anglina Taylor',
    job: 'Cardiac Surgeon',
    address: 'At Rainbow Hospital, MG street, Wallington, New York.',
    experience: '22 years',
    Fees: '$30',
    Feedback: 152,
    photo: require('../../assets/image/doctor3.png'),
  },
];

export const hospitals = [
  {
    id: 1,
    name: 'Apple Hospital',
    rating: 'General Hospital',
    address: 'At Walter street, Wallington, New York.',
    photo1: require('../../assets/image/hospital1.png'),
    photo2: require('../../assets/image/hospital2.png'),
    photo3: require('../../assets/image/hospital3.png'),
    photo4: require('../../assets/image/hospital4.png'),
    photo5: require('../../assets/image/hospital5.png'),
  },
  {
    id: 2,
    name: 'Silver Leaf Hospital',
    rating: 'Eye Care Hospital',
    address: 'At Walter street, Wallington, New York.',
    photo1: require('../../assets/image/hospital3.png'),
    photo2: require('../../assets/image/hospital2.png'),
    photo3: require('../../assets/image/hospital1.png'),
    photo4: require('../../assets/image/hospital5.png'),
    photo5: require('../../assets/image/hospital4.png'),
  },
  {
    id: 3,
    name: 'City Shine Hospital',
    rating: 'Eye Care Hospital',
    address: 'At Walter street, Wallington, New York.',
    photo1: require('../../assets/image/hospital2.png'),
    photo2: require('../../assets/image/hospital5.png'),
    photo3: require('../../assets/image/hospital3.png'),
    photo4: require('../../assets/image/hospital4.png'),
    photo5: require('../../assets/image/hospital1.png'),
  },
];

export const upAppoint = [
  {doctorid: 1, day: 12, date: 'WED', time: '12.00'},
  {doctorid: 3, day: 18, date: 'TUE', time: '14.00'},
];

export const pastAppoint = [
  {doctorid: 2, day: 15, date: 'Fed', time: '11.00'},
  {doctorid: 1, day: 21, date: 'Jan', time: '14.00'},
  {doctorid: 1, day: 18, date: 'TUE', time: '14.00'},
  {doctorid: 3, day: 7, date: 'Fed', time: '10.00'},
];
