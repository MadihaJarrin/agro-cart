import { useState } from "react";
import shopImg from '../../../assets/shop/banner4.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCategories from "../../../Hooks/useCategories";
import OrderTab from "../OrderTab/OrderTab";
import ParallaxCover from "../../../Component/Shared/ParallaxCover/ParallaxCover";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [list] = useCategories();
    const Vagetables = list.filter(item => item.category === 'vegetable');
    const nuts = list.filter(item => item.category === 'nuts');
    const fruits = list.filter(item => item.category === 'fruits');
    const rice = list.filter(item => item.category === 'rice');
    const others = list.filter(item => item.category === 'others');



    return (
        <div>
            <ParallaxCover img={shopImg} title={'Order Your desire'} className="h-[200px]"></ParallaxCover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='flex justify-center bg-yellow-500 p-1'>
                    <Tab>Vagetables</Tab>
                    <Tab>Nuts</Tab>
                    <Tab>Fruits</Tab>
                    <Tab>Rice</Tab>
                    <Tab>Others</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={Vagetables}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={nuts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={fruits}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={rice}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={others}></OrderTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;