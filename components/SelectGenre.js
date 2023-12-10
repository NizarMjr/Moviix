import { optionsMovie } from '@/Options/OptionsMovie';
import { optionsTV } from '@/Options/OptionsTV';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const SelectGenre = ({ setFilterWithGenre }) => {

    const option = useSelector(state => state.setGenreOption)
    const colourStyles = {
        menuList: styles => ({
            ...styles,
            color: 'black',
        }),
        value: styles => ({
            ...styles,
            display: 'flex',
            alignItems: 'center'
        })
    }

    const handleChange = (selectedValue) => {
        const arr = selectedValue.map((ele) => {
            return ele['value'];
        })
        setFilterWithGenre(arr);
    }
    return (
        <Select
            isMulti
            name="Select genres"
            options={option === 'movie' ? optionsMovie : optionsTV}
            className="basic-multi-select w-full bg-black"
            classNamePrefix="select"
            styles={colourStyles}
            onChange={handleChange}
        />
    )
}
export default SelectGenre;