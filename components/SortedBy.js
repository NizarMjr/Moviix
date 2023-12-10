import { sortbyData } from '@/Options/OptionsMovie';
import Select from 'react-select';

const SortedBy = ({ filterWithSort, setFilterWithSort }) => {
    const colourStyles = {
        menuList: styles => ({
            ...styles,
            color: 'black'
        }),
        singleValue: styles => ({
            ...styles,
            color: 'white'
        }),
        input: styles => ({
            ...styles,
            display: 'flex',
            alignItems: 'center'
        })
    }
    return (
        <Select
            name={filterWithSort}
            placeholder="Sort By"
            options={sortbyData}
            className="basic-multi-select w-full bg-black"
            classNamePrefix="select"
            styles={colourStyles}
            onChange={(op) => setFilterWithSort(op.value)}
        />
    )
}
export default SortedBy;