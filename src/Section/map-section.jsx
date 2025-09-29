"use client"

import { GitBranch } from "lucide-react"

export function FlowMapSection() {
  return (
    <section id="flowmap" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">

          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3 text-blue-800">
            <GitBranch className="w-8 h-8 text-blue-600" />
            Trưng cầu ý kiến cộng đồng
          </h3>
          <p className="text-blue-700 max-w-2xl mx-auto text-pretty">
            Khám phá các hành vi và trách nhiệm của công dân trong việc Vai trò của gia đình. 
            Tham gia thảo luận và chia sẻ kinh nghiệm với cộng đồng.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
            <div className="padlet-embed" style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '2px', boxSizing: 'border-box', overflow: 'hidden', position: 'relative', width: '100%', background: '#F4F4F4'}}>
              <p style={{padding: 0, margin: 0}}>
                <iframe 
                  src="https://padlet.com/embed/a6meltq8y19eilye" 
                  frameBorder="0" 
                  allow="camera;microphone;geolocation;display-capture;clipboard-write" 
                  style={{width: '100%', height: '608px', display: 'block', padding: 0, margin: 0}}
                />
              </p>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'end', margin: 0, height: '28px'}}>
                <a 
                  href="https://padlet.com?ref=embed" 
                  style={{display: 'block', flexGrow: 0, margin: 0, border: 'none', padding: 0, textDecoration: 'none'}} 
                  target="_blank"
                  rel="noopener noreferrer"
                >

                </a>
              </div>
            </div>
          <div>
        </div>
      </div>
    </section>
  )
}