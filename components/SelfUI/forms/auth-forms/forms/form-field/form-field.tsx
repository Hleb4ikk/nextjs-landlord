import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface FormFieldProps {
  errors?: string[];
  type?: string;
  placeholder?: string;
  name: string;
  id: string;
  htmlFor: string;
  title: string;
}

export default function FormField({ errors, placeholder, name, id, htmlFor, title, type }: FormFieldProps) {
  return (
    <>
      <div>
        <Label htmlFor={htmlFor}>{title}</Label>
        <Input
          className="border-2 border-[#363636] bg-[#1e1e1e] text-white placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
      {errors && (
        <div className="text-sm text-red-500">
          <ul>
            {errors.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
