import React from 'react';
import MyInput from "./Ui/input/MyInput";
import MySelect from "./Ui/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder='Search...'
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Filter by'
        options={[
          {value: 'title', name: 'Filter by name'},
          {value: 'body', name: 'Filter by description'}
        ]}
      />
    </div>
  );
};

export default PostFilter;