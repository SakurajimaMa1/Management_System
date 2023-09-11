import Mock from 'mockjs'

let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: '苹果',
                        value: 6999
                    },
                    {
                        name: 'vivo',
                        value: 2999
                    },
                    {
                        name: 'oppo',
                        value: 1999
                    },
                    {
                        name: '魅族',
                        value: 2500
                    },
                    {
                        name: '三星',
                        value: 7999
                    },
                    {
                        name: '小米',
                        value: 3999
                    }
                ],
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 10,
                        active: 500
                    },
                    {
                        date: '周三',
                        new: 12,
                        active: 550
                    },
                    {
                        date: '周四',
                        new: 14,
                        active: 600
                    },
                    {
                        date: '周五',
                        new: 11,
                        active: 400
                    },
                    {
                        date: '周六',
                        new: 13,
                        active: 500
                    },
                    {
                        date: '周日',
                        new: 17,
                        active: 700
                    }
                ],
                orderData: {
                    date: ['20131001', '20131002', '20131003', '20131004', '20131005', '20131006', '20131007'],
                    data: List
                },
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 200,
                        monthBuy: 2500,
                        totalBuy: 22000
                    },
                    {
                        name: '苹果',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22000
                    },
                    {
                        name: 'vivo',
                        todayBuy: 500,
                        monthBuy: 5500,
                        totalBuy: 42000
                    },
                    {
                        name: '魅族',
                        todayBuy: 550,
                        monthBuy: 6500,
                        totalBuy: 52000
                    },
                    {
                        name: '三星',
                        todayBuy: 700,
                        monthBuy: 4000,
                        totalBuy: 30000
                    },
                    {
                        name: '小米',
                        todayBuy: 400,
                        monthBuy: 4500,
                        totalBuy: 33000
                    },
                ]
            }
        }
    }
}