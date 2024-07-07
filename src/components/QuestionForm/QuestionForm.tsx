import { useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useCategories, createQuestions } from '../../api';
import { LEVEL, NUM_OF_QUESTION } from '../../constants';
import { questionsAtom } from '../../stores';
import { useAtom } from 'jotai';
import {
  CategoryItem,
  DifficultyItem
} from '../../types';
import {
  randomizeAndGenerateQuestion
} from '../../utils';

function QuestionForm() {
  const { categories, isLoading } = useCategories();
  const [selectedCategory, setCategory] = useState("");
  const [selectedDifficulty, setDifficulty] = useState('');
  const [, setQuestions] = useAtom(questionsAtom);

  const handleChangecategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  
  const handleChangeceDifficuity = (event: SelectChangeEvent) => {
    setDifficulty(event.target.value);
  };

  const handleCreateQuestion = async () => {
    if (!selectedCategory || !selectedDifficulty) return
    const params = {
      amount: NUM_OF_QUESTION,
      categoryId: selectedCategory,
      difficultyLevel: selectedDifficulty,
    }
    const { results } = await createQuestions(params);
    if (results) {
      setQuestions(randomizeAndGenerateQuestion(results));
    }
  };

  const categoryItems = () => {
    const list: React.ReactNode[] = [];
    categories.forEach((item: CategoryItem) => {
      list.push(
        <MenuItem key={`category-item-${item.id}`} value={item.id}>{item.name}</MenuItem>
      );
    });
    return list;
  }

  const dificuityItems = () => {
    const list: React.ReactNode[] = [];
    LEVEL.forEach((item: DifficultyItem) => {
      list.push(
        <MenuItem key={`dificuity-item-${item.value}`} value={item.value}>{item.title}</MenuItem>
      );
    });
    return list;
  }

  return (
    <>
      <div className='question-form'>
        <FormControl sx={{ m: 1, minWidth: 300 }}>
          {
            !isLoading ? <Select
              id="categorySelect"
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              value={selectedCategory}
              onChange={handleChangecategory}
            >
              {
                categoryItems()
              }
            </Select> : <></>
          }
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <Select
            id="difficultySelect"
            value={selectedDifficulty}
            onChange={handleChangeceDifficuity}
          >
            {
              dificuityItems()
            }
          </Select>
        </FormControl>
        <FormControl>
          <Button
            id="createBtn"
            variant="outlined"
            size="medium"
            onClick={handleCreateQuestion}
          >
            Create
          </Button>
        </FormControl>
      </div>

    </>
  )
}

export default QuestionForm
