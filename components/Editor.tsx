"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";
const MenuBar = ({ editor }: { editor: Editor | null }) => {
	if (!editor) return null;
	return (
		<div className=" flex flex-wrap gap-5">
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				type="button"
				variant={
					editor.isActive("heading", { level: 1 }) ? "default" : "secondary"
				}
			>
				H1
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				type="button"
				variant={
					editor.isActive("heading", { level: 2 }) ? "default" : "secondary"
				}
			>
				H2
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				type="button"
				variant={
					editor.isActive("heading", { level: 3 }) ? "default" : "secondary"
				}
			>
				H3
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleBold().run()}
				type="button"
				variant={
					editor.isActive('bold') ? "default" : "secondary"
				}
			>
				Bold
			</Button>
      <Button onClick={()=> editor.chain().focus().toggleItalic().run()} type='button' variant={
        editor.isActive('italic') ? 'default' : 'secondary'
      }>Italic</Button>
       <Button onClick={()=> editor.chain().focus().toggleStrike().run()} type='button' variant={
        editor.isActive('strike') ? 'default' : 'secondary'
      }>Strike</Button>
      
		</div>
	);
};

export default MenuBar;
export const TipTapEditor = () => {
	const editor = useEditor({
		extensions: [StarterKit],
    content:'<p>Hello </p>',
    editorProps:{
      attributes:{
        class:'focus:outline-none min-h-[150px] prose prose-sm sm:prose-base'
      }
    }
	});
	return (
		<div className="">
			<MenuBar editor={editor} />
      <EditorContent editor={editor} className="rounded-lg border p-2 min-h-[150px] mt-2 " />
		</div>
	);
};
