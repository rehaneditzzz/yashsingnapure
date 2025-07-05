'use client';
import { useEffect, useState } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

interface Service { id: string; title: string; description: string; image: string; isCode: string; }

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ title: '', description: '', isCode: 'code' });
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => { fetch('/api/services').then(r => r.json()).then(setServices); }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', form.title);
    data.append('description', form.description);
    data.append('isCode', form.isCode);
    if (file) data.append('image', file);

    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/services/${editingId}` : '/api/services';
    await fetch(url, { method, body: data });
    reset();
  };

  const reset = () => {
    setForm({ title: '', description: '', isCode: 'code' });
    setFile(null);
    setEditingId(null);
    fetch('/api/services').then(r => r.json()).then(setServices);
  };

  const edit = (svc: Service) => {
    setEditingId(svc.id);
    setForm({ title: svc.title, description: svc.description, isCode: svc.isCode });
  };

  const remove = async (id: string) => {
    if (confirm('Delete this service?')) {
      await fetch(`/api/services/${id}`, { method: 'DELETE' });
      setServices(s => s.filter(x => x.id !== id));
    }
  };

  return (
    <main className="p-6 space-y-6">
      <section className="bg-white/5 p-4 rounded-lg">
        <h2 className="text-xl mb-2">Manage Services</h2>
        <ul className="space-y-2">
          {services.map(s => (
            <li key={s.id} className="flex justify-between items-center bg-white/10 p-3 rounded">
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-white/70">{s.description}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => edit(s)}><PencilIcon className="w-5 h-5 text-yellow-300"/></button>
                <button onClick={() => remove(s.id)}><TrashIcon className="w-5 h-5 text-red-400"/></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-white/5 p-4 rounded-lg">
        <h2>{editingId ? 'Edit Service' : 'Add New Service'}</h2>
        <form onSubmit={submit} className="space-y-3">
          <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="Title" required className="w-full p-2 bg-white/10 rounded" />
          <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Description" required className="w-full p-2 bg-white/10 rounded" />
          <select value={form.isCode} onChange={e => setForm({...form, isCode: e.target.value})} className="w-full p-2 bg-white/10 rounded">
            <option value="code">Code</option><option value="photo">Photo</option>
          </select>
          <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] ?? null)} className="w-full bg-white/10 rounded" {...(!editingId && { required: true })} />
          <button type="submit" className="bg-blue-600 px-4 py-2 rounded text-white">
            {editingId ? 'Update Service' : 'Create Service'}
          </button>
        </form>
      </section>
    </main>
  );
}
