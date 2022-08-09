import React from 'react'

function RecentItems({topic}) {
  return (
    <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
  )
}

export default RecentItems
