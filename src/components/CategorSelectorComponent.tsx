"use client"
import { useRouter } from 'next/navigation';
import { Category } from '../../sanity.types';

export default function CategoryDropdown({ categories }:{categories:Category[]}) {
  const router = useRouter();

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSlug = e.target.value;
    if (selectedSlug) {
      router.push(`/categories/${selectedSlug}`);
    }
  };



  return (
    <div className="w-48 my-6 mx-6">
      <select
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select a Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category.slug?.current}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
}
