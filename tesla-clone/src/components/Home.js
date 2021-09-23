import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                description='Oder Online for Touchless Delivery'
                backgroundImg='model-s.jpg'
                leftBtnText='Custom Oder'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model 3'
                description='Oder Online for Touchless Delivery'
                backgroundImg='model-3.jpg'
                leftBtnText='Custom Oder'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model X'
                description='Oder Online for Touchless Delivery'
                backgroundImg='model-x.jpg'
                leftBtnText='Custom Oder'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model Y'
                description='Oder Online for Touchless Delivery'
                backgroundImg='model-y.jpg'
                leftBtnText='Custom Oder'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                backgroundImg='solar-panel.jpg'
                leftBtnText='Order Now'
                rightBtnText='Learn more'
            />
            <Section
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof plus SOlar Panels'
                backgroundImg='solar-roof.jpg'
                leftBtnText='Order Now'
                rightBtnText='Learn more'
            />
            <Section
                title='Accessories'
                description=''
                backgroundImg='accessories.jpg'
                leftBtnText='Shop Now'
                rightBtnText=''
            />
            
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`