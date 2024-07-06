import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useCategories } from '../api/category';

function QuestionForm() {
  const [selectedCategory, setCategory] = useState("1");
  const { categories, isLoading } = useCategories();
  const [difficulty, setDifficulty] = useState('');

  const handleChangecategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  const handleChangeceDifficuity = (event: SelectChangeEvent) => {
    setDifficulty(event.target.value);
  };
  const CategoryItems = () => {
    const list: any[] = [];
    categories.forEach((item: any) => {
      list.push(
        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
      );
    });
    return list;
  }
  return (
    <>
      <div className='question-form'>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          {
            !isLoading ? <Select
              id="question-form-category"
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              value={selectedCategory}
              onChange={handleChangecategory}
            >
              {CategoryItems()}
            </Select> : <></>
          }
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <Select
            id="question-form-difficulty"
            value={difficulty}
            onChange={handleChangeceDifficuity}
          >
            <MenuItem value={'easy'}>Easy</MenuItem>
            <MenuItem value={'medium'}>Medium</MenuItem>
            <MenuItem value={'hard'}>Hard</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Button variant="outlined" size="medium">
            Create
          </Button>
        </FormControl>

      </div>

    </>
  )
}

export default QuestionForm
