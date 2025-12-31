"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { TopBar } from "@/components/dashboard/top-bar"
import { EditorToolbar } from "@/components/editor/editor-toolbar"
import { EditorBlock } from "@/components/editor/editor-block"
import type { EditorBlock as EditorBlockType } from "@/lib/types"
import { Save, Eye } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

export default function NewPostPage() {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [blocks, setBlocks] = useState<EditorBlockType[]>([
    {
      id: uuidv4(),
      type: "paragraph",
      content: { text: "Start writing your content here..." },
    },
  ])
  const [previewOpen, setPreviewOpen] = useState(false)

  const addBlock = (type: string) => {
    const newBlock: EditorBlockType = {
      id: uuidv4(),
      type: type as any,
      content:
        type === "list"
          ? { items: [""] }
          : type === "image"
            ? { url: "", alt: "" }
            : type === "code"
              ? { code: "" }
              : { text: "" },
    }
    setBlocks([...blocks, newBlock])
  }

  const updateBlock = (updatedBlock: EditorBlockType) => {
    setBlocks(blocks.map((b) => (b.id === updatedBlock.id ? updatedBlock : b)))
  }

  const deleteBlock = (id: string) => {
    if (blocks.length > 1) {
      setBlocks(blocks.filter((b) => b.id !== id))
    }
  }

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  return (
    <>
      <TopBar />
      <Sidebar />
      <main className="md:ml-64 bg-background min-h-screen">
        <div className="p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-h1 mb-2">New Post</h1>
                <p className="text-foreground-light">Create and publish your article.</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setPreviewOpen(!previewOpen)}
                  className="btn btn-outline px-4 py-2 flex items-center gap-2"
                >
                  <Eye size={18} />
                  Preview
                </button>
                <button className="btn btn-primary px-4 py-2 flex items-center gap-2">
                  <Save size={18} />
                  Publish
                </button>
              </div>
            </div>

            {/* Meta Section */}
            <div className="card mb-8 space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Post Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your post title..."
                  className="w-full bg-background px-4 py-3 rounded-lg border border-border text-h3 font-bold focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                  Excerpt
                </label>
                <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief description of your post..."
                  rows={3}
                  className="w-full bg-background px-4 py-3 rounded-lg border border-border text-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium mb-2">
                  Tags
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    id="tags"
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    placeholder="Add tags..."
                    className="flex-1 bg-background px-4 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <button type="button" onClick={addTag} className="btn btn-outline px-4 py-2 text-sm">
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => removeTag(tag)}
                      className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent hover:bg-accent/20 transition-colors"
                    >
                      {tag} ×
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Toolbar */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Add Block</p>
              <EditorToolbar onAddBlock={addBlock} />
            </div>

            {/* Editor */}
            <div className="card space-y-4">
              {blocks.map((block) => (
                <EditorBlock key={block.id} block={block} onUpdate={updateBlock} onDelete={deleteBlock} />
              ))}

              <button
                onClick={() => addBlock("paragraph")}
                className="w-full py-8 rounded-lg border-2 border-dashed border-border hover:border-accent transition-colors text-foreground-light hover:text-accent text-sm"
              >
                + Add Block
              </button>
            </div>

            {/* Save buttons */}
            <div className="flex gap-3 mt-8">
              <button className="btn btn-outline px-6 py-3 flex-1">Save as Draft</button>
              <button className="btn btn-primary px-6 py-3 flex-1">Publish Post</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
