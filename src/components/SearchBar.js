import React, { useState} from 'react'
import ClassSimple from './ClassSimple';

export default function SearchBar(props) {
  const { search, setSearch, classes } = props
  const [dropDown, setDropDown] = useState('name')
  const onChangeSearch = (evt) => {
    setSearch(evt.target.value)
  }

  const onChangeDrop = (evt) => {
    setDropDown(evt.target.value)
  }
  if (!classes) {return null}
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={onChangeSearch}
        value={search}
        className='search-bar'
      />
      <select name="criteria" onChange={onChangeDrop} value={dropDown} className='drop-down'>
        <option value="name">Name</option>
        <option value="type">Type</option>
        <option value="start_time">Start Time</option>
        <option value="date">Date</option>
        <option value="duration">Duration</option>
        <option value="intensity_level">Intensity Level</option>
        <option value="location">Location</option>
        <option value="attendees">Attendees</option>
        <option value="max_size">Max Size</option>
      </select>
      {classes
      // eslint-disable-next-line
        .filter((cla) => {
          if (!search) {
            return null
          } else if (
            cla[dropDown].toString().toLowerCase().includes(search.toString().toLowerCase())
          ) {
            return cla
          }
        })
        .map((cla) => {
          // Should be hooked up to other
          return (
            <ClassSimple item={cla} key={cla.class_id}/>
          )
        })}
    </div>
  )
}
