import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useNews from "../hooks/useNews";
import { CATEGORIES, COUNTRIES } from "../utils";


const Form = () => {

    const { country, handleChangeCountry, category, handleChangeCategory } = useNews();

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel> País </InputLabel>
                <Select
                    label="Categoría"
                    onChange={handleChangeCountry}
                    value={country}
                >
                    {COUNTRIES.map(country => (
                        <MenuItem
                            key={country.value}
                            value={country.value}
                        >
                            {country.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: 2 }}>
                <InputLabel> Categoria </InputLabel>
                <Select
                    label="Categoría"
                    onChange={handleChangeCategory}
                    value={category}
                >
                    {CATEGORIES.map(category => (
                        <MenuItem
                            key={category.value}
                            value={category.value}
                        >
                            {category.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    )
}

export default Form;