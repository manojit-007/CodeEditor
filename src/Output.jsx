/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button'
import { useState } from 'react';
import { toast } from 'sonner';
import { executeCode } from './Api';

const OutPut = ({editorRef,selectedLanguage}) => {
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async() => {
        const sourceCode = editorRef.current.getValue();
        console.log(editorRef.current.getValue());
        if(!sourceCode) return;
        try {
            setLoading(true);
            const {run:result} = await executeCode(selectedLanguage, sourceCode)
            setOutput(result.output.split("\n"));
            result.stderr? setIsError(true) : setIsError(false);
        } catch (error) {
            console.log(error);
            toast.error(error.message|| "Unable to execute code");
        }finally{
            setLoading(false);
        }
    }
  return (
    <div className='w-1/2 bg-black h-[90vh] p-2'>
        <h2 className='mb-1'>Output</h2>
        <Button variant="outline" className="mb-1 bg-black text-white" onClick={runCode}>Run code</Button>
        <span className='text-white'>{loading? " loading..." : ""}</span>
        <div className={`h-[82vh] rounded-sm p-2 border overflow-scroll overflow-x-hidden ${isError ? "border-red-500 text-red-500" : "border-gray-600 text-white"} `}>
            {output ? output.map(
                (line, index) => <p key={index}>{line}</p>
            ) : "Click 'Run code' to see the output." }
        </div>
    </div>
  )
}

export default OutPut