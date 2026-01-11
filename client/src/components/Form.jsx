import React, { useState } from 'react';

const Form = ({ addPost }) => {
  const [form, setForm] = useState({
    title: '',
    message: '',
    creator: '',
    tags: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ ...form, tags: form.tags.split(',') });
    setForm({ title: '', message: '', creator: '', tags: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Creator"
        value={form.creator}
        onChange={(e) => setForm({ ...form, creator: e.target.value })}
      />
      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <input
        placeholder="Tags (comma separated)"
        value={form.tags}
        onChange={(e) => setForm({ ...form, tags: e.target.value })}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default Form;
