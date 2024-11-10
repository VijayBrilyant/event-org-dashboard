import React from 'react';
import usermaleImg1 from '../assets/user1.png';
import usermaleImg2 from '../assets/user2.png';
import usermaleImg3 from '../assets/user3.png';
import usermaleImg4 from '../assets/user4.png';

import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
defaults.maintainAspectRatio = false;
defaults.responsive = true;
const RecentActivity = () => {
    const eventData = [
        {
            orderNo: "#001",
            guestName: "John Doe",
            eventName: "Annual Gala",
            eventLocation: "New York City",
            eventDate: "2024-12-10",
            amount: "$150",
            email: "johndoe@example.com",
            profileImg: usermaleImg1
        },
        {
            orderNo: "#002",
            guestName: "Jane Smith",
            eventName: "Technology Expo",
            eventLocation: "San Francisco",
            eventDate: "2024-12-15",
            amount: "$200",
            email: "janesmith@example.com",
            profileImg: usermaleImg4
        },
        {
            orderNo: "#003",
            guestName: "Michael Johnson",
            eventName: "Healthcare Summit",
            eventLocation: "Chicago",
            eventDate: "2024-12-20",
            amount: "$250",
            email: "mjohnson@example.com",
            profileImg: usermaleImg2
        },
        {
            orderNo: "#004",
            guestName: "Emily Brown",
            eventName: "Art & Culture Fest",
            eventLocation: "Los Angeles",
            eventDate: "2024-12-25",
            amount: "$180",
            email: "ebrown@example.com",
            profileImg: usermaleImg4
        },
        {
            orderNo: "#005",
            guestName: "Chris Wilson",
            eventName: "Business Innovation Forum",
            eventLocation: "Miami",
            eventDate: "2024-12-30",
            amount: "$300",
            email: "cwilson@example.com",
            profileImg: usermaleImg3
        }
    ];

    return (
        <>

            <div className='container mt-5'>
                <div className='grid md:grid-cols-5 grid-cols-1 gap-5'>


                    <div className='col-span-3'>
                        <div className='theme-card rounded-[10px] px-4 py-2 eql-card-100'>
                            <table class="recent-activity">
                                <thead>
                                    <tr>
                                        <th>Order No.</th>
                                        <th>Guest Name</th>
                                        <th>Event Name</th>
                                        <th>Event Location</th>
                                        <th>Event Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {eventData.map((event, index) => (
                                        <tr key={index} >
                                            <td style={{ width: "80px" }}>{event.orderNo}</td>

                                            <td style={{ width: "200px" }}>
                                                <div className='flex items-center gap-2'>
                                                    <img src={event.profileImg} alt='user' className='table-img' />
                                                    <div className='user-info'>
                                                        <p>{event.guestName}</p>
                                                        <p className='text-gray-500 text-[10px]'>{event.email}</p>
                                                    </div>

                                                </div>
                                            </td>

                                            <td>{event.eventName}</td>
                                            <td>{event.eventLocation}</td>
                                            <td>{event.eventDate}</td>
                                            <td className='event-amount'><p>+{event.amount}</p></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='col-span-2'>
                        <div className='theme-card p-3 eql-card-100 rounded-[10px]'>
                            <div className='flex items-center justify-between pb-5 traffic-card'>
                                <h5 className='text-[25px] m-0'>Traffic Channel</h5>

                                <select id='flter-traffic' name='filter-traffic'>
                                    <option value=''>All Time</option>
                                    <option value='This Month'>This Month</option>
                                    <option value='This Year'>This Year</option>
                                </select>
                            </div>

                            <div className='graph-line mt-5' >

                                <Doughnut
                                    data={{
                                        labels: ['Invite', 'Referral', 'Registered'],
                                        datasets: [
                                            {
                                                data: [20, 40, 80],
                                                backgroundColor: [
                                                    '#fc9504',
                                                    '#ff0033',
                                                    '#606066'
                                                ],
                                                pointBackgroundColor: 'white',
                                                borderColor: '#1d1d1e',
                                                hoverOffset: 20,
                                                borderRadius: 6,
                                                borderWidth: 3

                                            },


                                        ]
                                    }}

                                    options={{
                                        aspectRatio: 0.8,
                                        plugins: {
                                            legend: {
                                                display: true, // Hides the legend
                                                position: 'right',
                                            },

                                        },

                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default RecentActivity