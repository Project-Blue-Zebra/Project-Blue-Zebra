// eslint-disable-next-line import/no-anonymous-default-export
export default{
    fulfillments: [{
        _id: 1,
        createdAt: '02/24/2020',
        totalPrice: 34.90,
        user:{
            name: 'Grace'
        },
        isPaid: true,
        paidAt: '02/27/2020',
        isFulfilled: false,
        deliveredDate: null,
    },
    {
        _id: 2,
        createdAt: '02/17/2020',
        totalPrice: 34.90,
        user:{
            name: 'Kamryn'
        },
        isPaid: true,
        paidAt: '02/19/2020',
        isFulfilled: true,
        deliveredDate: null, 
    },
    {
        _id: 3,
        createdAt: '02/05/2020',
        totalPrice: 34.90,
        user:{
            name: 'Tobey'
        },
        isPaid: true,
        paidAt: '02/08/2020',
        isFulfilled: false,
        deliveredDate: null,
    }]
}