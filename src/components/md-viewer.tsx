import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MdViewerProps {
    content: string
}

export default function MdViewer({content}: MdViewerProps) {
    // console.log(content)

    return (
        <div className="bg-[#1D2129] min-h-screen text-white">
            <ReactMarkdown
                components={{
                    h1: ({node, ...props}) => <h1 className="text-2xl font-bold" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-xl font-bold" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-lg font-bold" {...props} />,
                    h4: ({node, ...props}) => <h4 className="text-base font-bold" {...props} />,
                    h5: ({node, ...props}) => <h5 className="text-sm font-bold" {...props} />,
                    h6: ({node, ...props}) => <h6 className="text-xs font-bold" {...props} />,
                    p: ({node, ...props}) => <p className="text-base my-4 inline-block" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal list-inside" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside" {...props} />,
                    blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-4 border-gray-500 pl-4 italic" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                        <a className="text-blue-500 hover:underline" {...props} />
                    )
                }}
                remarkPlugins={[remarkGfm]}
                className="mb-8"
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}
