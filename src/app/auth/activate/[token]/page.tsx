'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

export default function ActivatePage() {
  const params = useParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const { token } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://avltu-backend.onrender.com/auth/activate/${token}`);
    };
  });
}
