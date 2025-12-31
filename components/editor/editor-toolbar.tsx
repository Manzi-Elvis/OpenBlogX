"use client"

import { Type, Heading1, Heading2, Heading3, List, Code, Quote, ImageIcon, MoreHorizontal } from "lucide-react"

interface EditorToolbarProps {
  onAddBlock: (type: string) => void
}

export function EditorToolbar({ onAddBlock }: EditorToolbarProps) {
  const tools = [
    { icon: Heading1, label: "H1", type: "heading1" },
    { icon: Heading2, label: "H2", type: "heading2" },
    { icon: Heading3, label: "H3", type: "heading3" },
    { icon: Type, label: "Text", type: "paragraph" },
    { icon: List, label: "List", type: "list" },
    { icon: Code, label: "Code", type: "code" },
    { icon: Quote, label: "Quote", type: "quote" },
    { icon: ImageIcon, label: "Image", type: "image" },
  ]

  return (
    <div className="flex flex-wrap gap-1 p-3 bg-card border border-border rounded-lg">
      {tools.map((tool) => (
        <button
          key={tool.type}
          onClick={() => onAddBlock(tool.type)}
          title={tool.label}
          className="p-2 rounded-lg hover:bg-border transition-colors text-foreground-light hover:text-foreground"
        >
          <tool.icon size={20} />
        </button>
      ))}
      <div className="border-l border-border mx-1"></div>
      <button className="p-2 rounded-lg hover:bg-border transition-colors text-foreground-light hover:text-foreground">
        <MoreHorizontal size={20} />
      </button>
    </div>
  )
}
