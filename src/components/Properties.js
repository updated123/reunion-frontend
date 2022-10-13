import React from 'react'
import './properties.css'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack'
import { HiLocationMarker } from 'react-icons/hi'
import { BiArea } from 'react-icons/bi'
import { 
  locations, 
  priceRanges, 
  propertyTypes,
  properties
} from '../data'
import { BiBed } from 'react-icons/bi'
import { FaShower } from 'react-icons/fa'
import { useState } from 'react';

function Properties() {

    const checkIfInRange = (rent, id) => {
        console.log(id)
        if (id == 1) {
            return true;
        } else if (id == 2) {
            return (rent <= 500)
        } else if (id == 3) {
            return (rent >= 500 && rent <=1000)
        } else if (id == 4) {
            return (rent >= 1000 && rent <=2000)
        }
    }

    const [location, setLocation] = useState(locations[0])
    const [date, setDate] = useState(Date.parse('3000-01-01'))
    const [priceRange, setPriceRange] = useState(1)
    const [type, setType] = useState(propertyTypes[0])

  return (
    <div className='filter'>
        <div className="filter-btns">
        <Stack direction='horizontal' gap={3}>
            <Dropdown onSelect={(_, o) => {
                setLocation(o.target.text)
            }}>
                <Dropdown.Toggle id="dropdown-basic">
                    Location
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    { locations.map(loc => <Dropdown.Item href="#/action-1">{loc}</Dropdown.Item>) }
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(_, o) => {
                console.log(o.target.text)
                if (o.target.text == 'All') {
                    setPriceRange(1)
                } else if (o.target.text == '0 - $500') {
                    setPriceRange(2)
                }
                else if (o.target.text == '$500 - $1000') {
                    setPriceRange(3)
                }
                else if (o.target.text == '$1000 - $2000') {
                    setPriceRange(4)
                }
            }}>

                <Dropdown.Toggle id="dropdown-basic">
                    Price
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    { priceRanges.map(loc => <Dropdown.Item href="#/action-1">{loc['value']}</Dropdown.Item>) }
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(_, o) => {
                setType(o.target.text)
                console.log(o.target.text)
            }}>

            <Dropdown.Toggle id="dropdown-basic">
                Property Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                propertyTypes.map(loc => <Dropdown.Item href="#/action-1">{loc}</Dropdown.Item>)
                }
                {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
            </Dropdown>

            <input type="date" onChange={(e) => {
                console.log(e.target.value)
                setDate(Date.parse(e.target.value))
                console.log(date)
            }} ></input>

        </Stack>
        </div>
        <div className="main-content">
        {
            properties.map(prop => {
                console.log(prop)
                if (
                    prop['location'] == location || location == 'All'
                    && (Date.parse(prop['when_move_in']) <= date) 
                    && (prop['type'] == type || type == 'All')
                    && checkIfInRange(prop['rent'], priceRange)
                )
                    return <div className="prop">
                    <Card>
                    <Card.Img variant="top" src={`${prop.image}`} />
                    <Card.Body>
                        <Card.Title>{prop.name}</Card.Title>
                        <div className="contents">
                            <HiLocationMarker /> {prop['location']}
                            <p>$ {prop['rent']}</p>
                        </div>
                        <div className='card-contents'>
                            <p><BiBed /> {prop['bed']} </p>  
                                
                            <p><FaShower /> {prop['bathroom']}</p>

                            <p><BiArea /> {prop['area']} </p>
                        </div>
                    </Card.Body>
                    </Card>
                </div>

            })
        }
        
        </div>
    </div>
  )
}

export default Properties