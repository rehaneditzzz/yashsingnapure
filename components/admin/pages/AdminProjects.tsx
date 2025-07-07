
'use client';

import { useEffect, useState } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  name: string;
  tech: string[];
  live: string;
  code: string;
  img: string;
}

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', tech: '', live: '', code: '' });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fetchProjects = async () => {
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('tech', form.tech);
    formData.append('live', form.live);
    formData.append('code', form.code);
    if (imageFile) formData.append('image', imageFile);

    const url = editId ? `/api/projects/${editId}` : '/api/projects';
    const method = editId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      body: formData,
    });

    if (res.ok) {
      resetForm();
    }
  };

  const resetForm = () => {
    setForm({ name: '', tech: '', live: '', code: '' });
    setImageFile(null);
    setEditId(null);
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    await fetch(`/api/projects/${id}`, { method: 'DELETE' });
    fetchProjects();
  };

  const handleEdit = (project: Project) => {
    setEditId(project.id);
    setForm({
      name: project.name,
      tech: project.tech.join(', '),
      live: project.live,
      code: project.code,
    });
    setImageFile(null); // Let user re-upload if needed
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>

      <section className="bg-white/5 p-4 rounded-xl shadow-md">
        <h2 className="text-lg mb-2 font-semibold">All Projects</h2>
        <ul className="space-y-2">
          {projects.map((p) => (
            <li
              key={p.id}
              className="flex justify-between items-center bg-white/10 p-3 rounded-lg"
            >
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-white/70 text-sm">{p.tech.join(', ')}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleEdit(p)} title="Edit">
                  <PencilIcon className="w-5 h-5 text-yellow-400 hover:text-yellow-300" />
                </button>
                <button onClick={() => handleDelete(p.id)} title="Delete">
                  <TrashIcon className="w-5 h-5 text-red-500 hover:text-red-400" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white/5 p-4 rounded-xl shadow-md">
        <h2 className="text-lg mb-2 font-semibold">
          {editId ? 'Edit Project' : 'Create New Project'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 bg-white/10 rounded"
            required
          />
          <input
            type="text"
            placeholder="Tech (comma-separated)"
            value={form.tech}
            onChange={(e) => setForm({ ...form, tech: e.target.value })}
            className="w-full p-2 bg-white/10 rounded"
            required
          />
          <input
            type="text"
            placeholder="Live URL"
            value={form.live}
            onChange={(e) => setForm({ ...form, live: e.target.value })}
            className="w-full p-2 bg-white/10 rounded"
            required
          />
          <input
            type="text"
            placeholder="Code URL"
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            className="w-full p-2 bg-white/10 rounded"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
            className="w-full bg-white/10 rounded"
            // required={!editId}  // Optional: enforce image for new only
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
          >
            {editId ? 'Update Project' : 'Add Project'}
          </button>
        </form>
      </section>
    </main>
  );
}
