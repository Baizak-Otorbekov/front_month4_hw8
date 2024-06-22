import React, {  useContext } from 'react';
import { ThemeContext } from '../App';


const filters = [{
    id: 1,
    value: 1,
    label: 'Все'
},
{
    id: 2,
    value: 2,
    label: 'Мясные'
},
{
    id: 3,
    value: 3,
    label: 'Вегетарианская'
},
{
    id: 4,
    value: 4,
    label: 'Гриль'
},
{
    id: 5,
    value: 5,
    label: 'Острые'
},
{
    id: 6,
    value: 6,
    label: 'Закрытые'
}
]
const Categories = ({ curent, setCurent }) => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    return (
        <div className="categories">
            <ul>
                {
                    filters.map((item) =>
                        <li
                            onClick={() => setCurent(item.value)}
                            style={isDarkMode ? {background:'green'} : {}} className={ 
                                curent === item.value
                                    ? 'active'
                                    : ''}>
                            {item.label}
                        </li>
                    )
                }

            </ul>
        </div >
    )
}

export default Categories