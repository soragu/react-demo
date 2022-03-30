import { Fab, FormControl, MenuItem, Select } from '@mui/material'
import { useState } from 'react'

function LocaleSelector(props) {
  const [locale, setLocale] = useState('zh-CN')

  const handleChange = function(event) {
    setLocale(event.target.value) 
  }

	return (
    <FormControl sx={{ m: 1}}>
      <Select
        labelId="selectLocale"
        id="selectLocale"
        value={locale}
        label=""
        onChange={handleChange}
        size="small"
        className="select-locale"
      >
        <MenuItem value="zh-CN">中文</MenuItem>
        <MenuItem value="en-US">英文</MenuItem>
      </Select>
    </FormControl>
  )
}

export default LocaleSelector