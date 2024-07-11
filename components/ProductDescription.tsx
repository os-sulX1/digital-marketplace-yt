'use client'
import { EditorContent, type JSONContent, useEditor } from '@tiptap/react'
import React from 'react'
import StarterKit from '@tiptap/starter-kit'
const ProductDescription = ({content} : { content : JSONContent}) => {
  const editor =useEditor({
    editable:false,
    content:content,
    extensions:[StarterKit],
    editorProps:{
      attributes:{
        class:'prose prose-sm sm:prose-base',

      }
    }
  })
  if(!editor) return null
  return (
    <>
    <EditorContent editor={editor} />
    
    </>
  )
}

export default ProductDescription