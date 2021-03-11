import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Col, Row, Avatar } from 'antd';
import css from './CountriesList.module.css';

const { Meta } = Card

const CountrieList = function ({ countriesList }) {

	const list = countriesList.map((el) =>
		<Col span={4} key={el.name}>
			<Card
				style={{ width: '200px' }}
				cover={
					<NavLink to={`/${el.name}`} id={el.name}>
						<img style={{ width: '200px', height: '200px', objectFit: 'cover' }}
							alt="example"
							src={el.photo}
						/>
					</NavLink>
				}
				actions={[
				]}
			>
				<Meta style={{ textAlign: 'center' }}
					title={el.name}
					description="This is the description"
				/>

			</Card>
		</Col>
	)


	return (
		
			<Row wrap style={{display:'flex', justifyContent:'center'}}>
				{list}
			</Row>

	)
}


export default CountrieList