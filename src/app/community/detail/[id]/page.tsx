import Link from 'next/link';

import styles from "@/app/page.module.scss";
import PostDetail from "@/components/PostDetail/PostDetail";

interface DetailProps {
  params: {
    id: string;
  };
}

export default function Detail({ params }: DetailProps) {
  return (
    <div className={styles.pageContainer}>
      <div className="fadeIn">
        <PostDetail postId={params.id} />
        <div className={styles.btn}>
          <Link href="/community"><button>목록으로</button></Link>
        </div>
      </div>
    </div>
  );
}