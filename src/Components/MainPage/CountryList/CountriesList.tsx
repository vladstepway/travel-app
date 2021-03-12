import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Col, Row, Avatar } from 'antd';

const { Meta } = Card

const CountrieList = function ({ countriesList,text,setExcretion,setSearchToggle}: any) {

	const list = countriesList.map((el:any) =>{
		return (
		<Col span={4} key={el.name}>
			<Card
				hoverable
				style={{ width: '200px' }}
				cover={
					<NavLink to={`/${el.name}`} id={el.name} onClick={()=>setSearchToggle(true)}>
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
					title={setExcretion(el.name,text)}
					description={setExcretion(el.capital,text)}
				/>

			</Card>
		</Col>
	)}
	)


	return (
		
			<Row wrap style={{display:'flex', justifyContent:'center'}}>
				{list}
			</Row>

	)
}


export default CountrieList