import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
const AnalyticChart = () => {
  return (
    <>
         <div className='theme-card p-3 rounded-[10px]'>
                            <h5 className='text-[12px] text-gray-500'>Revenue</h5>
                            <div className='stats flex items-center gap-3'>
                                <p className='text-[25px]'>$16,400</p>

                                <p className='per px-1 rounded-[100px] flex items-center gap-1 font-[600]'><FiArrowUpRight className='text-[10px] font-[700]' style={{ color: "#24d5b5" }} /> +10%</p>
                            </div>
                            <div className='graph-line mt-5'>
                                <Line
                                    data={{
                                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                        datasets: [
                                            {
                                                label: 'Profit',
                                                data: [20, 40, 80, 90, 38, 40, 69, 70, 10, 28, 27, 99],
                                                fill: true,
                                                pointBackgroundColor: 'white',
                                                backgroundColor: (context) => {
                                                    const ctx = context.chart.ctx;
                                                    const gratient = ctx.createLinearGradient(0, 0, 0, 300);
                                                    gratient.addColorStop(0, '#fc9504');
                                                    gratient.addColorStop(1, 'transparent');
                                                    return gratient
                                                },
                                                borderColor: '#fc9504',
                                                borderRadius: 3

                                            },


                                        ]
                                    }}

                                    options={{
                                        // elements: {
                                        //     line: {
                                        //         tension: 0.5,
                                        //     },
                                        // },
                                        plugins: {
                                            legend: {
                                                display: false, // Hides the legend
                                            },
                                        },

                                        scales: {

                                            y: {
                                                min: 2,
                                                max: 100,
                                                ticks: {
                                                    stepSize: 0,
                                                    callback: (value) => value + 'k'
                                                },
                                                grid: {
                                                    display: true,
                                                    color: '#ffffff12',
                                                    borderDash: [10, 2],
                                                },
                                            },
                                            x: {
                                                grid: {
                                                    display: false,
                                                },
                                            },

                                        },
                                    }}
                                />
                            </div>

                        </div>
    </>
  )
}

export default AnalyticChart