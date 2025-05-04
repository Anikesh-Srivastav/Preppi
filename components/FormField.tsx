import React, { useState } from 'react'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'
import { Controller, FieldValues, Path, Control } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder: string
  type?: 'text' | 'password' | 'email' | 'file'
  children?: React.ReactNode
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
}: FormFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Determine if this is a password field that needs a toggle
  const isPassword = type === 'password';
  
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='label'>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input 
                className='input w-full' 
                placeholder={placeholder} 
                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                {...field} 
              />
              {isPassword && (
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? 
                    <EyeOff size={18} className="text-gray-500" /> : 
                    <Eye size={18} className="text-gray-500" />
                  }
                </button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormField

