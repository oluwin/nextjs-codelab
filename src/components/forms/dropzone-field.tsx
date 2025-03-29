import clsx from 'clsx';
import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import { useDropzone } from 'react-dropzone';

interface InputProps {
  placeholder?: string;
  className?: any;
  name?: string;
  value?: any;
  handleFileUpload: any;
  label?: string;
  required?: boolean;
}

export function DropzoneField({
  handleFileUpload,
  className,
  label = '',
  required = false,
}: InputProps) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      handleFileUpload(acceptedFiles);
    },
  });

  return (
    <>
      {label != '' && (
        <label
          className={clsx(
            'block text-sm font-medium text-gray-700 mb-2',
            className
          )}
        >
          {label}{' '}
          {required && (
            <span className="text-red-500">*</span>
          )}
        </label>
      )}
      <div
        {...getRootProps({ className: 'dropzone' })}
        className={`${className} rounded-lg border-[2px] py-5 px-4 text-base text-gray-500 bg-[#F9FAFB] border-[#E5E7EB] border-dashed`}
      >
        <div className="cursor-pointer">
          <input
            className="hidden w-full"
            {...getInputProps()}
          />
          <div
            className={
              'flex flex-row justify-center items-center'
            }
          >
            <Image
              className=""
              src="/icons/file-upload.svg"
              alt="file-icon"
              width={48}
              height={48}
            />
            <div className={'ml-4'}>
              <p className="text-gray-900 font-bold  text-sm">
                Tap to add file for{' '}
                {label ? label : 'this document'}
              </p>
              <p className="text-gray-600 text-xs w-full">
                Note: Your File should not be more than
                20MB
              </p>
              <p className="text-gray-600 text-xs w-full">
                Supported file types are .jpeg, .png, .jpg
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
